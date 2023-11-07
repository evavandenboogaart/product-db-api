import handleStatus from "./helpers/handleStatus";
import { DatabaseCollectionType } from "../../database";
import { HttpStatusCode } from "axios";
import { FetchUserResult } from "../fetch/fetchGeneric";
import { encrypt } from "../../cryptography";

type SetDataProps = { newValue: FetchUserResult } & DatabaseCollectionType;

const setData = async ({
  newValue,
  collection,
  query,
}: SetDataProps): Promise<{ status?: HttpStatusCode }> => {
  const encryptedGeneric = encrypt(newValue.generic);
  const set = {
    $set: {
      generic: encryptedGeneric,
    }
  };
  const { modifiedCount } = await collection.updateOne(query, set);
  return handleStatus(modifiedCount);
}

export default setData;