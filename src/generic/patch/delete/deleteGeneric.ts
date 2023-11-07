import patchGeneric, { Action } from "../patchGeneric";

const deleteGeneric = async (id: string) => {
  const newValueAction: Action = (existingValue) => {
    return { ...existingValue, generic: '' };
  };
  return await patchGeneric(id, newValueAction);
}

export default deleteGeneric;