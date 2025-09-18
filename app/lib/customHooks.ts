"use client";

import { useEffect, useState } from "react";

import { Post } from "./definitions";
export function useFetch(endpoint: string): Array<Post> | null {
  const [fetchedData, setFetchedData] = useState(null);
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/${endpoint}`)
      .then((res) => res.json())
      .then((data) => setFetchedData(data));
  }, [endpoint]);
  return fetchedData;
}
