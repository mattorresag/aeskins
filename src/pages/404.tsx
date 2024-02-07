import { NextPage } from "next";
import React from "react";
import { Layout } from "../Layout/Layout";

const NotFound: NextPage = (): JSX.Element => {
  return (
    <Layout subtitle="Página não encontrada">
      <div className="w-full h-[calc(100vh-64px)] flex-col flex items-center justify-center">
        <h1 className="text-4xl font-bold text-center">
          Página não encontrada
        </h1>
      </div>
    </Layout>
  );
};

export default NotFound;
