// import { getBlogs } from "@/api/blog";

export const cx = (...className: string[]) =>
  className.filter(Boolean).join("");
