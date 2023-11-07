import { HttpStatusCode } from "axios";
import database from "../../database";
import { fetchByUserId } from "../fetch";
import { FetchUserResult } from "../fetch/fetchGeneric";
import setData from "./setData";

export type Action = (value: FetchUserResult) => FetchUserResult;

interface DatabaseReturnType {
  status: HttpStatusCode;
}

const patchGeneric = async (id: string, action: Action): Promise<{ status: HttpStatusCode }> => {
  const { status } = await database(async () => {
    const { status: fetchStatus, result, collection, query } = await fetchByUserId(id);
    if (fetchStatus === HttpStatusCode.NotFound || !result) return { status: HttpStatusCode.NotFound };
    const newValue = action(result);
    return setData({ newValue, collection, query });
  }) as DatabaseReturnType;
  return { status };
};

export default patchGeneric;