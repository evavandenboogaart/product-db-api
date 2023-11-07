import { Collection, Db, Document, MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const connection_string = process.env.MONGODB_CONNECTION_STRING;

type CallBackType = (db: Db) => Promise<unknown>;

export interface DatabaseCollectionType {
  collection: Collection<Document>;
  query: Record<string, unknown>;
}

export default async (callback: CallBackType) => {
  if (!connection_string) throw("connection_string missing in env file");
  const client = new MongoClient(connection_string);
  const aoiDb = client.db('aoi');
  const response = await callback(aoiDb);
  client.close();
  return response;
};