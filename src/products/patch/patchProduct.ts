import { HttpStatusCode } from "axios";
import database from "../../database";
import fetchProduct from "../fetch/fetchProduct";
import setData from "./setData";

export type Action = (value: Record<string, unknown>) => Record<string, unknown>;

interface DatabaseReturnType {
  status: HttpStatusCode;
}

const patchProduct = async (id: string, action: Action): Promise<{ status: HttpStatusCode }> => {
  const { status } = await database(async () => {
    const { status: fetchStatus, result, collection, query } = await fetchProduct(id);
    if (fetchStatus === HttpStatusCode.NotFound || !result) return { status: HttpStatusCode.NotFound };
    const newValue = action(result);
    return setData({ newValue, collection, query });
  }) as DatabaseReturnType;
  return { status };
};

export default patchProduct;