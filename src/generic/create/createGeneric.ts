import { encrypt } from "../../cryptography";
import { DatabaseCollectionType } from "../../database";
import { HttpStatusCode } from "axios";

const createGeneric = async ({
  generic,
  collection,
}: { generic: string } & Partial<DatabaseCollectionType>): Promise<{ status?: HttpStatusCode }> => {
  if (!collection) return { status: HttpStatusCode.BadRequest };
  const newValue = {
    generic: encrypt(generic),
  };
  const { insertedId } = await collection.insertOne(newValue);
  return { status: insertedId ? HttpStatusCode.Created : HttpStatusCode.Found };
}

export default createGeneric;