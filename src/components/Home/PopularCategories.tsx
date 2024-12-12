import React from "react";
import Link from "next/link";
import { client } from "@/utils/contentful";
import Image from "next/image";

const PopularCategories = async () => {
  const blogs: any = await client.getEntries({
    content_type: "post",
    limit: 6,
  });
  return (
    <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
      <div className="w-full flex justify-between">
        <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl">
          Popular Categories
        </h2>
        <Link
          href="categories/all"
          className="inline-block font-medium text-accent underline underline-offset-2 text-base md:text-lg"
        >
          view all
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-row-2 gap-16 mt-16">
        {blogs.items.map((blog: any) => (
          <article key={blogs?.id} className="col-span-1 row-span-1 relative">
            <div className="group flex flex-col items-center text-dark">
              <Link
                href={"/blogs-detail/" + blog.sys.id}
                className="col-span-4 h-full rounded-xl overflow-hidden"
              >
                <Image
                  src={"https:" + blog.fields.image.fields.file.url}
                  alt="image"
                  width={718}
                  height={404}
                  className="aspect-[4/3] h-full w-full object-center object-cover group-hover:scale-105 transition-all ease duration-300"
                />
              </Link>

              <div className="flex flex-col w-full mt-4">
                <span className=" uppercase text-accent font-semibold text-xs sm:text-sm">
                  {blog.fields.tags}
                </span>
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
                <span className=" capitalize text-dark/50 font-semibold text-sm sm:text-base">
                  {blog.fields.dateAt}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;
