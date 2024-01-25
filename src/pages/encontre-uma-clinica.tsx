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

const clinicasMap: Location[] = [
  {
    id: "loc1",
    lat: 40.7128,
    lng: -74.006,
    nome: "Central Park Clinic",
    especializacao: "General Medicine",
    horaInicio: "08:00",
    horaFim: "17:00",
    endereco: "59th to 110th Street, Manhattan, New York, NY 10022",
    dias: "Monday-Friday",
    status: "aberto",
  },
  {
    id: "loc2",
    lat: 51.5074,
    lng: -0.1278,
    nome: "London Health Center",
    especializacao: "Pediatrics",
    horaInicio: "09:00",
    horaFim: "18:00",
    endereco: "Westminster, London SW1A 0AA, UK",
    dias: "Monday-Friday",
    status: "aberto",
  },
  {
    id: "loc3",
    lat: 48.8566,
    lng: 2.3522,
    nome: "Paris Community Hospital",
    especializacao: "Cardiology",
    horaInicio: "07:30",
    horaFim: "16:30",
    endereco: "3 Rue de la Santé, 75013 Paris, France",
    dias: "Monday-Friday",
    status: "aberto",
  },
  {
    id: "loc4",
    lat: 35.6895,
    lng: 139.6917,
    nome: "Tokyo Medical Center",
    especializacao: "Neurology",
    horaInicio: "08:00",
    horaFim: "20:00",
    endereco: "2-5-1 Nishi-Shinjuku, Shinjuku City, Tokyo 160-0023, Japan",
    dias: "Every day",
    status: "aberto",
  },
  {
    id: "loc5",
    lat: -33.8688,
    lng: 151.2093,
    nome: "Sydney Health Clinic",
    especializacao: "Orthopedics",
    horaInicio: "10:00",
    horaFim: "19:00",
    endereco: "1 Macquarie Street, Sydney NSW 2000, Australia",
    dias: "Monday-Saturday",
    status: "aberto",
  },
];

const Clinicas: NextPage = (): JSX.Element => {
  const isEmpty = false;

  const locations: Location[] = clinicasMap.map((clinica) => ({
    lat: clinica.lat,
    lng: clinica.lng,
    id: clinica.nome,
    nome: clinica.nome,
    endereco: clinica.endereco,
    horaInicio: "08:00",
    horaFim: "18:00",
    dias: "Segunda a Sexta",
    especializacao: "Clínica Geral",
    status: "aberto",
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
    <Layout subtitle="Encontre uma clínica" url="encontre-uma-clinica">
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
                    location={clinica}
                    key={clinica.nome}
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
