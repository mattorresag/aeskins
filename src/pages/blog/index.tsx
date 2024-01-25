import React from "react";
import { Layout } from "../../Layout/Layout";
import { BlogHero } from "../../features/Blog/BlogHero/BlogHero";
import { NextPage } from "next";
import { UltimosPosts } from "../../features/Blog/UltimosPosts/UltimosPosts";

const Blog: NextPage = (): JSX.Element => {
  return (
    <Layout subtitle="Blog e Artigos" url="blog">
      <BlogHero />
      <UltimosPosts />
    </Layout>
  );
};

export default Blog;
