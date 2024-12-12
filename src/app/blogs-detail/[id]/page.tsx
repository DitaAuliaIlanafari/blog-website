import * as React from "react";
import Image from "next/image";
import { client } from "@/utils/contentful";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function BlogDetails({ params }: Props) {
  const blog: any = await client.getEntry((await params).id);

  return (
    <article className="px-4">
      <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
        <div className="w-full z-10 flex flex-col py-28 items-center justify-center absolute">
          <h1 className="inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-5xl leading-normal relative w-5/6">
            {blog.fields.title}
          </h1>
        </div>
        <div className=" absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60" />
        <Image
          src={"https:" + blog.fields.image.fields.file.url}
          alt="image"
          width={718}
          height={404}
          className="aspect-square h-full w-full object-center object-cover"
        />
      </div>

      <div className="flex justify-center">
        <div
          key={blog?.id}
          suppressHydrationWarning
          className=" max-w-screen-lg"
        >
          {blog.fields.content.content.map((c: any) => (
            <p key={blog?.id} className="mt-4 text">
              {c.content.map((_: any) => _.value)}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}
