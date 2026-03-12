export type Result<T> =
  | { ok: true; data: T }
  | { ok: false; error: string };

export type PaginatedResult<T> = {
  id?: number;
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}