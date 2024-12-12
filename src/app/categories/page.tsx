import React from "react";
import Link from "next/link";
import { client } from "@/utils/contentful";
import Image from "next/image";

const Categories = async () => {
  const blogs: any = await client.getEntries({
    content_type: "post",
  });
  return (
    <article className="w-full mt-10 flex flex-col items-center justify-center">
      <div className="px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col">
        <h1 className="text-center font-bold capitalize text-2xl md:text-4xl lg:text-5xl">
          #Categories
        </h1>
      </div>
      <div className="w-full mt-5 sm:mt-10 p-5 border-t-2 border-b-2 border-solid border-dark grid xs:flex grid-cols-2 xs:flex-row items-center justify-center text-dark">
        <span className="inline-block mb-2 mx-2 py-1.5 md:py-2 px-6 md:px-10 text-center bg-light text-dark rounded-full capitalize font-semibold border-solid border-dark hover:scale-105 transition-all ease-linear duration-200 text-xs md:text-sm !border">
          #Productivity
        </span>
        <span className="inline-block mb-2 mx-2 py-1.5 md:py-2 px-6 md:px-10 text-center bg-light text-dark rounded-full capitalize font-semibold border-solid border-dark hover:scale-105 transition-all ease-linear duration-200 text-xs md:text-sm !border">
          #Javascript
        </span>
        <span className="inline-block mx-2 py-1.5 md:py-2 px-6 md:px-10 text-center bg-light text-dark rounded-full capitalize font-semibold border-solid border-dark hover:scale-105 transition-all ease-linear duration-200 text-xs md:text-sm !border">
          #Code-Quality
        </span>
        <span className="inline-block  mx-2 py-1.5 md:py-2 px-6 md:px-10 text-center bg-light text-dark rounded-full capitalize font-semibold border-solid border-dark hover:scale-105 transition-all ease-linear duration-200 text-xs md:text-sm !border">
          #CSS
        </span>
      </div>
      <div
        key={blogs?.id}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-row-2 gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32"
      >
        {blogs.items.map((blog: any) => (
          <article key={blogs?.id} className="col-span-1 row-span-1 relative">
            <div className="group flex flex-col items-center text-dark">
              <Link
                href={"#"}
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
                <Link href={"#"} className="inline-block my-1">
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
        ;
      </div>
    </article>
  );
};

export default Categories;
