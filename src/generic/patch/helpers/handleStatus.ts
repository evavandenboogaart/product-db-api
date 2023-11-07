import { HttpStatusCode } from "axios";

interface DatabaseReturnType {
  status: HttpStatusCode;
}

const handleStatus = (modifiedCount: number): DatabaseReturnType => {
  switch (modifiedCount) {
    case 0:
      return { status: HttpStatusCode.NotModified }
    case 1:
      return { status: HttpStatusCode.Ok }
    default:
      return { status: HttpStatusCode.Ok }

  }
}

export default handleStatus;