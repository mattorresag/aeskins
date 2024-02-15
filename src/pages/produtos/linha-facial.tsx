import { NextPage } from "next";
import React from "react";
import { Layout } from "../../Layout/Layout";
import { ProdutosFaciaisHero } from "../../features/Produtos/ProdutosFaciaisHero";
import { Produtos } from "../../features/Produtos/Produtos";
import { AntesEDepoisSofiderm } from "../../features/Produtos/AntesEDepoisSofiderm";
import { QuemUtiliza } from "../../features/QuemUtiliza/QuemUtiliza";

const LinhaFacial: NextPage = (): JSX.Element => {
  return (
    <Layout subtitle="Linha Facial" url="produtos/linha-facial">
      <ProdutosFaciaisHero />
      <Produtos />
      {/* <AntesEDepoisSofiderm /> */}
      {/* <QuemUtiliza /> */}
    </Layout>
  );
};

export default LinhaFacial;
