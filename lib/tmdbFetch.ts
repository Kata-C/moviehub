import { ApiError } from "@/types/apiError";
import { Result } from "@/types/result";
import { failure, success } from "@/utils/result";

const API_TOKEN = process.env.NEXT_PUBLIC_TMDB_API_ACCESS_TOKEN;
const BASE_URL = "https://api.themoviedb.org/3";

export async function tmdbFetch<T>(
    endpoint: string,
    params?: Record<string, string | number>
): Promise<Result<T>> {
    const url = new URL(`${BASE_URL}${endpoint}`);
    if (params) {
        Object.entries(params).forEach(([key, value]) => {
            url.searchParams.set(key, String(value));
        });
    }
    try{
        const response = await fetch(url.toString(), {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API_TOKEN}`
            }
        });
        if (!response.ok) {
            return failure(`Failed to fetch from TMDB: ${response.statusText}`);
        }
        const data = await response.json()
        return success(data);
    } catch {
        return failure('Unknown error fetching TMDB');
    }
}