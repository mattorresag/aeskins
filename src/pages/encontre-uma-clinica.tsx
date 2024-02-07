import { NextPage } from "next";
import React from "react";
import { Layout } from "../Layout/Layout";

import { BuscarClinicas } from "../features/Clinicas/BuscarClinicas";

const Clinicas: NextPage = (): JSX.Element => {
  return (
    <Layout subtitle="Encontre uma clínica" url="encontre-uma-clinica">
      <BuscarClinicas />
    </Layout>
  );
};

export default Clinicas;
