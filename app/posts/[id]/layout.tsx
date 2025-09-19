import { Post } from "@/app/lib/definitions";
import { getData } from "@/app/lib/utils";
import { Metadata } from "next";
import { ReactNode } from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: number }>;
}): Promise<Metadata> {
  const { id } = await params;
  const post = await getData<Post>(id, "posts");
  return {
    title: `Posts | ${post.id.toString()}`,
    description: post.title,
  };
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="size-full fixed top-0 left-0 bg-white p-8 md:p-30">
      {children}
    </div>
  );
}
