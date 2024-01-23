import React from "react";
import { Flex } from "../Flex/Flex";
import Image from "next/image";
import Icons from "../../../public/assets/icons";
import { Location } from "../../utils/types";
interface Props {
  nome: string;
  endereco: string;
  lat: string;
  lng: string;
  status: "aberto" | "fechado";
  imagem?: string;
  handleSelectedLocation: (location: Location | null) => void;
}
export const ClinicaCard = ({
  endereco,
  imagem,
  lat,
  lng,
  nome,
  status,
  handleSelectedLocation,
}: Props): JSX.Element => {
  const statusStyle = `${
    status === "aberto" ? "bg-status-open" : "bg-status-closed"
  } py-2 px-3 text-[12px] font-[600] uppercase rounded-3xl h-6 items-center justify-center`;
  return (
    <Flex
      className="w-full rounded-md border-[1px] border-black/10 active:border-secondary-pure hover:border-secondary-pure"
      direction="col"
    >
      <Flex className="p-4 gap-4 lg:justify-between">
        <Flex className="flex-col lg:flex-row gap-4 lg:items-center w-full">
          <Flex className="w-20 h-20">
            <Image
              alt={`${nome} logo`}
              src={imagem || "/assets/produtoPlaceholder.png"}
              width={80}
              height={80}
              objectFit="cover"
            />
          </Flex>
          <Flex direction="col" className="gap-1">
            <p className="text-[20px] font-[400] leading-[30px] text-secondary-pure">
              {nome}
            </p>
            <Flex className="gap-1" align="center">
              <Icons.MapPin className="w-[18px] h-[18px]" />
              <p className="text-[14px] font-[400] leading-[21px] text-neutral-pure400">
                {endereco}
              </p>
            </Flex>
          </Flex>
        </Flex>
        <Flex className={statusStyle}>
          <p>{status}</p>
        </Flex>
      </Flex>
      <div className="divider h-0 m-0" />
      <Flex
        className="p-4 cursor-pointer"
        justify="between"
        onClick={() =>
          handleSelectedLocation({
            lat: parseFloat(lat),
            lng: parseFloat(lng),
            id: nome,
          })
        }
        align="center"
      >
        <Flex className="gap-2" align="center">
          <Icons.Map className="w-6 h-6" />
          <p className="text-[12px] font-[600] text-secondary-pure uppercase">
            VISUALIZAR NO MAPA
          </p>
        </Flex>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="8"
          viewBox="0 0 11 8"
          fill="none"
        >
          <path
            d="M10 4.00012L0.833334 4.00012"
            stroke="#29223E"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.62667 0.626709L10 4.00004L6.62667 7.37338"
            stroke="#29223E"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Flex>
    </Flex>
  );
};
