import { HttpStatusCode } from "axios";
import { Response } from "../../interfaces";
import database from "../../database";
import { Db } from "mongodb";
import { decrypt } from "../../cryptography";

export interface FetchUserResult {
  generic: string;
}

export type Result = Response & { results?: FetchUserResult[] };

const fetchAll = async (): Promise<Result> => {
  const { results } = await database(async (db: Db) => {
    const collection = db.collection('generics');
    const localResults = await collection.find({}).toArray();
    return { results: localResults };
  }) as Result;
  const status = typeof results === "object" ? HttpStatusCode.Ok : HttpStatusCode.NotFound;
  const resultsList = results?.map((result: FetchUserResult) => ({
    generic: decrypt(result.generic),
  }))
  return { status, results: resultsList };
};

export default fetchAll;