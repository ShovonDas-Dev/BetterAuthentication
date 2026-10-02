import { auth } from "../../../../lib/auth"; 
import { toNextJsHandler } from "better-auth/next-js";

export const { POST, GET, singOut, DELETE  } = toNextJsHandler(auth);