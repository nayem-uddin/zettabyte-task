"use client";

import { useEffect, useState } from "react";

interface FetchState<T> {
  data: T[] | null;
  error: string | null;
}

export function useFetch<T>(endpoint: string): FetchState<T> {
  const [fetchedData, setFetchedData] = useState<T[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            `Error ${res.status}: ${
              res.statusText || "The resource you requested doesn't exist."
            }`
          );
        }
        return res.json();
      })
      .then((data) => setFetchedData(data))
      .catch((err: Error) => setError(err.message));
  }, [endpoint]);
  return { data: fetchedData, error };
}
