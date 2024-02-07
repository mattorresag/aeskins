import React from "react";
import { Flex } from "../../components/Flex/Flex";
import Icons from "../../../public/assets/icons";
interface Props {
  handleUserSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const BuscarClinicasInput = ({
  handleUserSearch,
}: Props): JSX.Element => {
  return (
    <Flex
      justify="between"
      align="center"
      className="text-[14px] font-[600] leading-[17px] text-neutral-pure400 bg-neutral-pure100 p-2 pl-4"
    >
      <input
        placeholder="Pesquise por cidade, estado, nome.."
        className="input h-fit bg-transparent w-[90%]"
        onChange={handleUserSearch}
      />

      <Icons.BlackSearch className="w-10 h-10" />
    </Flex>
  );
};
