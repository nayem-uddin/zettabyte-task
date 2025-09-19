import { getData } from "@/app/lib/utils";
import { rubik } from "@/app/ui/fonts";
import { Post, User } from "@/app/lib/definitions";

export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const { id } = await params;
  const { title, body, userId } = await getData<Post>(id, "posts");
  const { name: author } = await getData<User>(userId, "users");
  return (
    <article className="flex flex-col gap-y-4">
      <header>
        <h1 className={`text-2xl md:text-3xl ${rubik.className} capitalize`}>
          {title}
        </h1>
        <p className="text-gray-600 italic mt-2">{author}</p>
      </header>
      <main>
        <p>{body}</p>
      </main>
    </article>
  );
}
