import { HttpStatusCode } from "axios";
import { Response } from "../../interfaces";
import database, { DatabaseCollectionType } from "../../database";
import { Db } from "mongodb";

export type Result = Response & { result?: Record<string, unknown> } & DatabaseCollectionType;

const fetchProduct = async (id: string): Promise<Result> => {
  const query = { id };
  const { result, collection, query: localQuery } = await database(async (db: Db) => {
    const collection = db.collection('products');
    const result = await collection.findOne(query);
    return { collection, query, result };
  }) as Result;
  const status = result !== null ? HttpStatusCode.Ok : HttpStatusCode.NotFound;
  return { status, result, collection, query: localQuery };
};

export default fetchProduct;