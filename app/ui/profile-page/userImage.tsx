import Image from "next/image";

export default function UserImage({
  imageLink,
}: {
  imageLink: string | null | undefined;
}) {
  if (!imageLink) return;
  return (
    <Image
      width={200}
      height={300}
      src={imageLink}
      alt="User image"
      quality={100}
      className="rounded-full"
      style={{ border: "0.1px solid gray" }}
    />
  );
}
