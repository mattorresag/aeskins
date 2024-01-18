import { NextPage } from "next";
import React from "react";
import { Layout } from "../Layout/Layout";
import { QuemSomosHero } from "../features/QuemSomos/QuemSomosHero/QuemSomosHero";
import { QuemSomosSecondSection } from "../features/QuemSomos/QuemSomosSecondSection/QuemSomosSecondSection";

const QuemSomos: NextPage = (): JSX.Element => {
  return (
    <Layout subtitle="Quem Somos">
      <QuemSomosHero />
      <QuemSomosSecondSection />
    </Layout>
  );
};

export default QuemSomos;
