import React from "react";
import { Layout } from "../../Layout/Layout";
import { NextPage } from "next";
import { BlogContainer } from "../../features/Blog/BlogContainer";

const Blog: NextPage = (): JSX.Element => {
  return (
    <Layout subtitle="Blog e Artigos" url="blog">
      <BlogContainer />
    </Layout>
  );
};

export default Blog;
