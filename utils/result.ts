import { Result } from "@/types/result";

export const success = <T>(data: T): Result<T> => ({ ok: true, data });
export const failure = <T>(error: string): Result<T> => ({ ok: false, error });