import dotenv from "dotenv";
import crypto from "crypto";
dotenv.config();

const key = process.env.CRYPTOGRAPHY_KEY;
const iv = process.env.CRYPTOGRAPHY_IV;

const decrypt = (val: string): string => {
  if (!key || !iv || !val) return val;
  const algorithm = "aes-256-cbc";
  const cipher = crypto.createDecipheriv(algorithm, key, iv);
  let encrypted = cipher.update(val, 'hex', 'utf8');
  encrypted += cipher.final('utf8');
  return encrypted;
}

export default decrypt;