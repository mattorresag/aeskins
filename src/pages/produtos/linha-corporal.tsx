import { NextPage } from "next";
import React from "react";
import { Layout } from "../../Layout/Layout";
import { Produtos } from "../../features/Produtos/Produtos";
import { QuemUtiliza } from "../../features/QuemUtiliza/QuemUtiliza";
import { ProdutosCorporaisHero } from "../../features/Produtos/ProdutosCorporaisHero";

const LinhaFacial: NextPage = (): JSX.Element => {
  return (
    <Layout subtitle="Linha Corporal" url="produtos/linha-corporal">
      <ProdutosCorporaisHero />
      <Produtos />
      <QuemUtiliza />
    </Layout>
  );
};

export default LinhaFacial;
