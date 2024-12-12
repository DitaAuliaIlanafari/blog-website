import Link from "next/link";
import React from "react";
import Image from "next/image";
import { client } from "@/utils/contentful";

const BlogLayoutTwo = async () => {
  const blogs: any = await client.getEntries({
    content_type: "post",
    limit: 2,
  });

  return blogs.items.map((blog: any) => (
    <div
      key={blogs?.id}
      className="group grid grid-cols-12 gap-2 items-center text-dark"
    >
      <Link
        href={"/blogs-detail/" + blog.sys.id}
        className="col-span-12 lg:col-span-4 h-full rounded-xl overflow-hidden"
      >
        <Image
          src={"https:" + blog.fields.image.fields.file.url}
          alt="image"
          width={718}
          height={404}
          className="aspect-square h-full w-full object-center object-cover rounded-xl group-hover:scale-105 transition-all ease duration-300"
        />
      </Link>
      <div className="col-span-12 lg:col-span-8 w-full">
        <span className="inline-block w-full uppercase text-accent font-semibold text-xs sm:text-sm">
          {blog.fields.tags}
        </span>
        <br />
        <Link
          href={"/blogs-detail/" + blog.sys.id}
          className="inline-block my-1"
        >
          <h2 className=" font-semibold capitalize text-base sm:text-lg">
            <span
              className="bg-gradient-to-r from-accent/50 to-accent/50 bg-[length:0px_6px]
              group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-
              [background-size] duration-500"
            >
              {blog.fields.title}
            </span>
          </h2>
        </Link>
        <br />
        <span className="inline-block w-full capitalize text-dark/50 font-semibold text-xs sm:text-base">
          {blog.fields.dateAt}
        </span>
      </div>
    </div>
  ));
};

export default BlogLayoutTwo;
