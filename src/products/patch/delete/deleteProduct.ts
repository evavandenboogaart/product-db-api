import { HttpStatusCode } from "axios";
import fetchProduct from "../../fetch/fetchProduct";
import database from "../../../database";
import handleStatus from "../helpers/handleStatus";

const deleteProduct = async (id: string): Promise<{ status: HttpStatusCode }> => {
  const { status } = await database(async () => {
    const { status: fetchStatus, result, collection, query } = await fetchProduct(id);
    if (fetchStatus === HttpStatusCode.NotFound || !result) return { status: HttpStatusCode.NotFound };
    const { deletedCount } = await collection.deleteOne(query);
    return handleStatus(deletedCount);
  }) as { status: HttpStatusCode };
  return { status };
};

export default deleteProduct;