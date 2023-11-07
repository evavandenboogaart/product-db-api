import { HttpStatusCode } from "axios";
import { Response } from "../../interfaces";
import database, { DatabaseCollectionType } from "../../database";
import { Db } from "mongodb";
import { decrypt } from "../../cryptography";

export interface FetchUserResult {
  generic: string;
}

export type Result = Response & { result?: FetchUserResult } & DatabaseCollectionType;

const fetchGeneric = async (query: Record<string, unknown>): Promise<Result> => {
  const { result, collection, query: localQuery } = await database(async (db: Db) => {
    const collection = db.collection('generics');
    const result = await collection.findOne(query);
    return { collection, query, result };
  }) as Result;
  const status = result !== null ? HttpStatusCode.Ok : HttpStatusCode.NotFound;
  const decryptedGeneric = result ? decrypt(result.generic) : '';
  return { status, result: result ? { generic: decryptedGeneric } : undefined, collection, query: localQuery };
};

export default fetchGeneric;