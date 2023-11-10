import handleStatus from "./helpers/handleStatus";
import { DatabaseCollectionType } from "../../database";
import { HttpStatusCode } from "axios";

type SetDataProps = { newValue: Record<string, unknown> } & DatabaseCollectionType;

const setData = async ({
  newValue,
  collection,
  query,
}: SetDataProps): Promise<{ status?: HttpStatusCode }> => {
  const set = {
    $set: newValue
  };
  const { modifiedCount } = await collection.updateOne(query, set);
  return handleStatus(modifiedCount);
}

export default setData;