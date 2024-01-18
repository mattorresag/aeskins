import { NextPage } from "next";
import React from "react";
import { Layout } from "../Layout/Layout";
import { QuemSomosHero } from "../features/QuemSomos/QuemSomosHero/QuemSomosHero";

const QuemSomos: NextPage = (): JSX.Element => {
  return (
    <Layout subtitle="Quem Somos">
      <QuemSomosHero />
    </Layout>
  );
};

export default QuemSomos;
