// "use client";

// import axios from "axios";
// const access_token = "nNQDWg7OnqtfkI6llcullAYVsBlbjcE7W88FOvV3j-8";

// export async function getBlogs() {
//   const res = await axios.get(
//     ` https://cdn.contentful.com/spaces/uq77e45pnyic/environments/master/entries/?access_token=${access_token}&include=1 `
//   );
//   const assets = res.data.includes.Assets;
//   const blogs = res.data.items.map((item: any, index: number) => {
//     return {
//       ...item,
//       id: item?.sys?.id,
//       image_url: item?.fields?.fields?.url,
//     };
//   });
//   return blogs;
// }

// export async function getBlogDetail(entriesId: string) {
//   const res = await axios.get(
//     `https://cdn.contentful.com/spaces/uq77e45pnyic/environments/master/entries/${entriesId}/?access_token=${access_token}&include=1`
//   );
//   const blogDetail = res.data.fields;
//   return blogDetail;
// }
