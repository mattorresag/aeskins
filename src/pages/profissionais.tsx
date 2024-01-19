import { NextPage } from "next";
import React from "react";
import { Layout } from "../Layout/Layout";
import { ParaProfissionaisHero } from "../features/ParaProfissionais/ParaProfissionaisHero";
import { ParaProfissionaisPosts } from "../features/ParaProfissionais/ParaProfissionaisPosts";

export const Profissionais: NextPage = (): JSX.Element => {
  return (
    <Layout subtitle="Para profissionais">
      <ParaProfissionaisHero />
      <ParaProfissionaisPosts />
    </Layout>
  );
};
export default Profissionais;
