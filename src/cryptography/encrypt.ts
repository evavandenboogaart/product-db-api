import dotenv from "dotenv";
import crypto from "crypto";
dotenv.config();

const key = process.env.CRYPTOGRAPHY_KEY;
const iv = process.env.CRYPTOGRAPHY_IV;

const encrypt = (val: string): string => {
  if (!key || !iv || !val) return val;
  const algorithm = "aes-256-cbc";
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(val, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

export default encrypt;