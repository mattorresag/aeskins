import React from "react";
import { Flex } from "../../components/Flex/Flex";
import Icons from "../../../public/assets/icons";
export const ParaProfissionaisHero = (): JSX.Element => {
  return (
    <Flex className="overflow-hidden pt-16 pb-[89px] px-[8%] xl:pl-[160px] lg:py-[100px] relative bg-secondary-pure">
      <Flex direction="col" className=" gap-6 max-w-[730px] z-[10]">
        <h1 className="text-[32px] text-white leading-[48px] font-[300] uppercase lg:text-[40px] lg:leading-[52px] lg:tracking-[2px]">
          Recursos Especializados para Profissionais de Estética
        </h1>
        <p className="text-[16px] leading-[24px] text-white lg:font-[300] lg:text-[18px] lg:leading-[27px]">
          Navegue por conteúdos produzidos e curados pela nossa experiente
          equipe, oferecendo uma perspectiva abrangente sobre nossos produtos
          inovadores, técnicas avançadas e insights valiosos para aprimorar
          ainda mais suas habilidades estéticas.
        </p>
      </Flex>
      <Flex className="absolute -right-[700px] lg:right-0 top-0">
        <Icons.Wave className="w-[1270px] h-[537px] lg:h-[420px]" />
      </Flex>
    </Flex>
  );
};
