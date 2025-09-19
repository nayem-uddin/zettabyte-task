export async function getData<T>(id: number, endpoint: string): Promise<T> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${endpoint}/${id}`
  );
  const post = await res.json();
  return post;
}
