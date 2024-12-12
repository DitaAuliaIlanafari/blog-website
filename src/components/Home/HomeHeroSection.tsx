import { client } from "@/utils/contentful";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function page() {
  const blog: any = await client.getEntry("2NSD3XgjjpgJqORlWqc2S2");

  return (
    <div className="w-full inline-block">
      <article className="flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]">
        <div
          className="absolute top-0 left-0 bottom-0 right-0 h-full 
        bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0"
        />
        <Image
          src={"https:" + blog.fields.image.fields.file.url}
          alt="title"
          fill
          className="h-full w-full object-center object-cover rounded-3xl -z-10 "
        />

        <div className="w-full lg:w-3/4 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center z-0 text-light">
          <Link
            href={"/categories"}
            className="inline-block py-1 sm:py-2 px-6 bg-dark text-light rounded-full capitalize font-semibold border-solid border-light hover:scale-105 transition-all ease-linear duration-200 text-xs sm:text-sm !border"
          >
            {blog.fields.tags}
          </Link>
          <div>
            <Link href={"/blogs-detail/" + blog.sys.id} className="mt-6">
              <h1 className="font-bold capitalize text-lg sm:text-xl md:text-3xl lg:text-4xl">
                <span
                  className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px]
              hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-
              [background-size] duration-500"
                >
                  {blog.fields.title}
                </span>
              </h1>
            </Link>
            <p className=" hidden sm:inline-block mt-4 md:text-lg lg:text-xl font-sans">
              {blog.fields.description}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
