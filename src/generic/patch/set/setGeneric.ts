import patchGeneric, { Action } from "../patchGeneric";

const setGeneric = async (id: string, value: string) => {
  const newValueAction: Action = (existingValue) => {
    const existingGeneric = existingValue.generic;
    const valueExists = existingGeneric === value;
    if (valueExists) return existingValue;
    return { ...existingValue, generic: value };
  };
  return await patchGeneric(id, newValueAction);
}

export default setGeneric;