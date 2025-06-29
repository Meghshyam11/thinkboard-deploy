// src/config/upstash.js

import dotenv from 'dotenv';
dotenv.config(); // ✅ Load environment variables

import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Create a ratelimiter that allows 5 requests per 10 seconds
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(), // Uses .env values
  limiter: Ratelimit.slidingWindow(10, "20 s"),
});

export default ratelimit;
