import patchProduct, { Action } from "../patchProduct";

const setProduct = async (id: string, value: Record<string, unknown>) => {
  const newValueAction: Action = (existingValue) => {
    const existingProduct = existingValue;
    const valueExists = JSON.stringify(existingProduct) === JSON.stringify(value);
    if (valueExists) return existingValue;
    return { ...existingValue, ...value };
  };
  return await patchProduct(id, newValueAction);
}

export default setProduct;