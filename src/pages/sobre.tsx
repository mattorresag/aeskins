import { NextPage } from "next";
import React from "react";
import { Layout } from "../Layout/Layout";
import { QuemSomosHero } from "../features/QuemSomos/QuemSomosHero/QuemSomosHero";
import { QuemSomosSecondSection } from "../features/QuemSomos/QuemSomosSecondSection/QuemSomosSecondSection";
import { QuemSomosLevandoBeleza } from "../features/QuemSomos/QuemSomosLevandoBeleza/QuemSomosLevandoBeleza";
import { ConhecaOTime } from "../features/QuemSomos/ConhecaOTime/ConhecaOTime";

const QuemSomos: NextPage = (): JSX.Element => {
  return (
    <Layout subtitle="Quem Somos">
      <QuemSomosHero />
      <QuemSomosSecondSection />
      <QuemSomosLevandoBeleza />
      <ConhecaOTime />
    </Layout>
  );
};

export default QuemSomos;
