import React from "react";
import { BlogHero } from "./BlogHero/BlogHero";
import { UltimosPosts } from "./UltimosPosts/UltimosPosts";
import { usePosts } from "../../http/hooks/posts/usePosts";

export const BlogContainer = (): JSX.Element => {
  const { data } = usePosts({
    options: {
      refetchOnWindowFocus: false,
    },
  });
  return (
    <>
      <BlogHero />
      <UltimosPosts posts={data} />
    </>
  );
};
