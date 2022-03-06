import {
  ZodError,
  ZodObject,
} from "zod";
import {apiError} from "@yehonadav/apierror";
import {statusCode} from "@yehonadav/statuscodes";

export function validateZod<T=any>(body:any, zodSchema:ZodObject<any>):T {
  try {
    return zodSchema.parse(body) as T;
  } catch (e:any) {
    throw apiError({
      statusCode: statusCode.badRequest,
      message: `Validation error: ${(e as ZodError).message}`,
    });
  }
}