import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// 5 submissions per 10 minutes per IP, shared across all server instances.
// Created lazily so a missing env var doesn't crash the build.
let limiter: Ratelimit | null = null;

export function getContactLimiter(): Ratelimit | null {
  const url = process.env.RATE_LIMIT_REDIS_URL;
  const token = process.env.RATE_LIMIT_REDIS_TOKEN;
  if (!url || !token) return null;

  if (!limiter) {
    limiter = new Ratelimit({
      redis: new Redis({ url, token }),
      limiter: Ratelimit.slidingWindow(5, '10 m'),
      prefix: 'portfolio:contact',
    });
  }
  return limiter;
}
