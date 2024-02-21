import React from "react";
import { BlogHero } from "./BlogHero/BlogHero";
import { UltimosPosts } from "./UltimosPosts/UltimosPosts";
import { usePosts } from "../../http/hooks/posts/usePosts";
import PageLoading from "../../components/PageLoading";

export const BlogContainer = (): JSX.Element => {
  const { data, isLoading } = usePosts({
    options: {
      refetchOnWindowFocus: false,
    },
  });
  return (
    <PageLoading isLoading={isLoading}>
      <BlogHero posts={data?.filter((post) => post.featured)} />
      <UltimosPosts posts={data} />
    </PageLoading>
  );
};
