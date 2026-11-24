type Bucket = {
  count: number;
  reset: number;
};

const buckets = new Map<string, Bucket>();

export function rateLimit(key: string, limit = 5, windowMs = 10 * 60 * 1000) {
  const now = Date.now();
  const current = buckets.get(key);

  if (!current || current.reset < now) {
    buckets.set(key, { count: 1, reset: now + windowMs });
    return { ok: true as const };
  }

  if (current.count >= limit) {
    return {
      ok: false as const,
      retryAfter: Math.max(1, Math.ceil((current.reset - now) / 1000)),
    };
  }

  current.count += 1;
  return { ok: true as const };
}
