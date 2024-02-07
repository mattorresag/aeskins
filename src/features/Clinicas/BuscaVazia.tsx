import React from "react";
import { Flex } from "../../components/Flex/Flex";
import Icons from "../../../public/assets/icons";

export const BuscaVazia = (): JSX.Element => {
  return (
    <Flex className="h-full w-full" justify="center" align="center">
      <Flex direction="col" className="gap-6" align="center" justify="center">
        <Icons.TransparentSearch className="w-[96px] h-[96px]" />
        <p className="text-[16px] font-[400] leading-[24px] text-neutral-pure400">
          Nenhuma clínica encontrada.
        </p>
      </Flex>
    </Flex>
  );
};
