import { NextPage } from "next";
import React from "react";
import { Layout } from "../Layout/Layout";
import { ProdutosHero } from "../features/Produtos/ProdutosHero";
import { Produtos } from "../features/Produtos/Produtos";
import { AntesEDepoisSofiderm } from "../features/Produtos/AntesEDepoisSofiderm";
import { QuemUtiliza } from "../features/QuemUtiliza/QuemUtiliza";

const Sofiderm: NextPage = (): JSX.Element => {
  return (
    <Layout subtitle="Produtos">
      <ProdutosHero />
      <Produtos />
      <AntesEDepoisSofiderm />
      <QuemUtiliza />
    </Layout>
  );
};

export default Sofiderm;
