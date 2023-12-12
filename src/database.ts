import { Collection, Db, Document, MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const connection_string = process.env.MONGODB_CONNECTION_STRING;
const dbName = process.env.MONGODB_NAME;

type CallBackType = (db: Db) => Promise<unknown>;

export interface DatabaseCollectionType {
  collection: Collection<Document>;
  query: Record<string, unknown>;
}

export default async (callback: CallBackType) => {
  if (!connection_string) throw("connection_string missing in env file");
  const client = new MongoClient(connection_string);
  const db = client.db(dbName);
  const response = await callback(db);
  client.close();
  return response;
};