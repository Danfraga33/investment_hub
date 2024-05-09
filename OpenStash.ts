import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: "https://eu1-driving-monster-40342.upstash.io",
  token: "********",
});

const data = await redis.set("foo", "bar");
