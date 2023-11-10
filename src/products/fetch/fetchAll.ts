import { HttpStatusCode } from "axios";
import { Response } from "../../interfaces";
import database from "../../database";
import { Db } from "mongodb";


export type Result = Response & { results?: Record<string, unknown>[] };

const fetchAll = async (): Promise<Result> => {
  const { results } = await database(async (db: Db) => {
    const collection = db.collection('products');
    const localResults = await collection.find({}).toArray();
    return { results: localResults };
  }) as Result;
  const status = typeof results === "object" ? HttpStatusCode.Ok : HttpStatusCode.NotFound;
  return { status, results };
};

export default fetchAll;