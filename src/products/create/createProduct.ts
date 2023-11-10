import database from "../../database";
import { HttpStatusCode } from "axios";
import fetchProduct from "../fetch/fetchProduct";

const createProduct = async (product: { id: string, [name: string]: unknown }): Promise<{ status: HttpStatusCode }> => {
  const { status } = await database(async () => {
    const { status: fetchStatus, collection } = await fetchProduct(product?.id);
    if (fetchStatus !== HttpStatusCode.NotFound) return { status: HttpStatusCode.Found };
    if (!collection) return { status: HttpStatusCode.BadRequest };
    const { insertedId } = await collection.insertOne(product);
    return { status: insertedId ? HttpStatusCode.Created : HttpStatusCode.Found };
  }) as { status: HttpStatusCode };
  return { status };


}

export default createProduct;