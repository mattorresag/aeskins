import { NextPage } from "next";
import React, { useState } from "react";
import { Layout } from "../Layout/Layout";
import { Flex } from "../components/Flex/Flex";
import Icons from "../../public/assets/icons";
import { BuscaVazia } from "../features/Clinicas/BuscaVazia";
import { ClinicaCard } from "../components/Cards/ClinicaCard";
import { Map } from "../components/GoogleMap/GoogleMap";
import { Location } from "../utils/types";
import { useRouter } from "next/router";

const clinicasMap = [
  {
    nome: "Clinica A",
    endereco: "123 Main St, City A",
    lat: "40.7128",
    lng: "-74.0060",
    status: "aberto",
  },
  {
    nome: "Clinica B",
    endereco: "456 Elm St, City B",
    lat: "34.0522",
    lng: "-118.2437",
    status: "fechado",
  },
  {
    nome: "Clinica C",
    endereco: "789 Oak St, City C",
    lat: "41.8781",
    lng: "-87.6298",
    status: "aberto",
  },
  {
    nome: "Clinica D",
    endereco: "101 Pine St, City D",
    lat: "37.7749",
    lng: "-122.4194",
    status: "fechado",
  },
] as const;

const Clinicas: NextPage = (): JSX.Element => {
  const isEmpty = false;

  const locations = clinicasMap.map((clinica) => ({
    lat: parseFloat(clinica.lat),
    lng: parseFloat(clinica.lng),
    id: clinica.nome,
  }));

  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );

  const router = useRouter();

  const handleSelectedLocation = (location: Location | null) => {
    setSelectedLocation(location);
    router.push("#mapa");
  };

  return (
    <Layout subtitle="Encontre uma clínica">
      <Flex className="w-full flex-col lg:flex-row gap-8 lg:pb-[100px]">
        <Flex className="justify-center lg:justify-start   w-full lg:w-[50%] py-10 min-[1440px]:pl-[160px] px-[5%] lg:pr-0">
          <Flex
            direction="col"
            style={{
              gap: isEmpty ? "16px" : "24px",
            }}
            className="w-full"
          >
            <Flex direction="col" className="gap-6">
              <Flex direction="col" className="gap-2">
                <p className="text-[24px] text-secondary-pure font-[600] leading-[36px] uppercase font-[600]">
                  ENCONTRE UMA CLÍNICA{" "}
                  <span className="font-[300]">PERTINHO DE VOCÊ </span>
                </p>
                <p className="text-neutral-pure400 leading-[24px]">
                  Pesquise uma clínica mais perto da localização que você
                  deseja.
                </p>
              </Flex>
              <Flex
                justify="between"
                align="center"
                className="text-[14px] font-[600] leading-[17px] text-neutral-pure400 bg-neutral-pure100 p-2 pl-4"
              >
                <input
                  placeholder="Pesquise por cidade, estado, nome.."
                  className="input h-fit bg-transparent w-[90%]"
                />

                <Icons.BlackSearch className="w-10 h-10" />
              </Flex>
            </Flex>
            <div className="divider h-0 m-0" />
            <Flex
              className="max-h-[732px] overflow-y-auto overflow-x-hidden gap-6"
              direction="col"
            >
              {isEmpty ? (
                <BuscaVazia />
              ) : (
                clinicasMap.map((clinica) => (
                  <ClinicaCard
                    key={clinica.nome}
                    endereco={clinica.endereco}
                    lat={clinica.lat}
                    lng={clinica.lng}
                    nome={clinica.nome}
                    status={clinica.status}
                    handleSelectedLocation={handleSelectedLocation}
                  />
                ))
              )}
            </Flex>
          </Flex>
        </Flex>
        <Flex className="lg:w-[50%] w-full lg:h-[975px] h-[446px]" id="mapa">
          <Map
            style={{
              width: "100%",
              height: "100%",
            }}
            selectedLocation={selectedLocation}
            handleSelectedLocation={handleSelectedLocation}
            locations={locations}
          />
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Clinicas;
