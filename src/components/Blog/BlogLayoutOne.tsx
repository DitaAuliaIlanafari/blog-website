import React from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/utils/contentful";

const BlogLayoutOne = async () => {
  const blogs: any = await client.getEntries({
    content_type: "post",
    limit: 1,
  });

  return blogs.items.map((blog: any) => (
    <article
      key={blogs?.id}
      className="col-span-2 sxl:col-span-1 row-span-2 relative"
    >
      <div className="group inline-block overflow-hidden rounded-xl">
        <Image
          src={"https:" + blog.fields.image.fields.file.url}
          alt="image"
          width={750}
          height={650}
          className="h-full w-full object-center object-cover rounded-xl group-hover:scale-105 transition-all ease duration-300"
        />

        <div className="w-full absolute p-4 bottom-96 xs:p-6 sm:p-10 z-20">
          <Link
            href={"/categories"}
            className="inline-block py-1 sm:py-2 px-6 bg-dark text-light rounded-full capitalize font-semibold border-solid border-light hover:scale-105 transition-all ease-linear duration-200 text-xs sm:text-sm !border"
          >
            {blog.fields.tags}
          </Link>
          <Link href={"/blogs-detail/" + blog.sys.id} className="mt-6">
            <h2 className="font-bold capitalize text-sm xs:text-base sm:text-xl md:text-2xl text-light mt-2 sm:mt-4">
              <span
                className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px]
              group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-
              [background-size] duration-500"
              >
                {blog.fields.title}
              </span>
            </h2>
          </Link>
        </div>
      </div>
    </article>
  ));
};

export default BlogLayoutOne;
