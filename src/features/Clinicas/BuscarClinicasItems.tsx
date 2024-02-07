import React, { useState } from "react";
import { BuscaVazia } from "./BuscaVazia";
import { ClinicaCard } from "../../components/Cards/ClinicaCard";
import { Location } from "../../utils/types";
import { useDebounce } from "react-use";
import { Flex } from "../../components/Flex/Flex";
import { BuscarClinicasInput } from "./BuscarClinicasInput";
import CircularProgress from "../../components/CircularProgress/CircularProgress";
interface Props {
  handleDebounced: (value: string) => void;
  handleSelectedLocation: (location: Location | null) => void;
  data?: Location[];
  isLoading?: boolean;
}
export const BuscarClinicasItems = ({
  data,
  isLoading,
  handleSelectedLocation,
  handleDebounced,
}: Props): JSX.Element => {
  const [userSearch, setUserSearch] = useState<string | undefined>();

  const isEmpty = !data || data?.length === 0;

  const renderClinicas = () => {
    if (isLoading)
      return (
        <Flex className="justify-center overflow-hidden min-h-[100px]">
          <CircularProgress />
        </Flex>
      );
    return isEmpty ? (
      <BuscaVazia />
    ) : (
      data.map((clinica) => (
        <ClinicaCard
          location={clinica}
          key={clinica.name}
          handleSelectedLocation={handleSelectedLocation}
        />
      ))
    );
  };

  const handleUserSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserSearch(e.target.value);
  };

  useDebounce(
    () => {
      handleDebounced(userSearch || "");
    },
    300,
    [userSearch]
  );

  return (
    <Flex className="justify-center lg:justify-start   w-full lg:w-[50%] py-10 xl:pl-[160px] px-[5%] lg:pr-0">
      <Flex
        direction="col"
        style={{
          gap: isEmpty ? "16px" : "24px",
        }}
        className="w-full"
      >
        <Flex direction="col" className="gap-6">
          <Flex direction="col" className="gap-2">
            <h1 className="text-[24px] text-secondary-pure font-[600] leading-[36px] uppercase font-[600]">
              ENCONTRE UMA CLÍNICA{" "}
              <span className="font-[300]">PERTINHO DE VOCÊ </span>
            </h1>
            <p className="text-neutral-pure400 leading-[24px]">
              Pesquise uma clínica mais perto da localização que você deseja.
            </p>
          </Flex>
          <BuscarClinicasInput handleUserSearch={handleUserSearch} />
        </Flex>
        <div className="divider h-0 m-0" />
        <Flex
          className="max-h-[732px] overflow-y-auto overflow-x-hidden gap-6"
          direction="col"
        >
          {renderClinicas()}
        </Flex>
      </Flex>
    </Flex>
  );
};
