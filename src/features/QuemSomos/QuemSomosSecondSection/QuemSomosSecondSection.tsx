import React from "react";
import { Flex } from "../../../components/Flex/Flex";
import Image from "next/image";

export const QuemSomosSecondSection = () => {
  return (
    <Flex
      direction="col"
      className="lg:py-[120px]  pb-[137px] pt-8 gap-16"
      align="center"
    >
      <Flex className="px-[5%] lg:px-0 xl:max-w-[1000px] max-w-[800px] w-full gap-8">
        <p className="text-center  text-[18px] 2xl:text-[20px] text-secondary-pure font-[300] leading-[27px] 2xl:leading-[30px]">
          A Aeskins Pharmaceutical tem a missão de democratizar a beleza,
          colocando nossos clientes em primeiro lugar.
          <br />
          <br />
          Formada por profissionais renomados e com mais de 20 anos de
          experiência no mercado de procedimentos estéticos,
          <br /> a Aeskins oferece uma linha de produtos inovadores em
          biotecnologia, para promover não só a beleza e a estética, mas
          principalmente a segurança, confiança, autoestima e o bem-estar dos
          pacientes.
          <br />
          <br />
          A Aeskins leva até os profissionais de estética uma jornada mais
          eficiente, fornecendo uma solução completa aliada a um programa de
          educação continuada, para que os pacientes obtenham os melhores
          resultados e maior satisfação do tratamento
          <br />
        </p>
      </Flex>
      <Flex
        direction="col"
        align="center"
        className="lg:px-[5%] 2xl:px-[2%] gap-8 lg:gap-16 w-full"
      >
        <Flex className="lg:gap-8 gap-[6px] w-full">
          <div className="relative w-full h-full  pt-[46.5%] ">
            <Image
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={"/assets/quemsomos1.png"}
              alt={"Quem somos 1"}
              layout="fill"
              quality={100}
              priority
            />
          </div>
          <div className="relative w-full h-full  pt-[46.5%] ">
            <Image
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={"/assets/quemsomos2.png"}
              alt={"Quem somos 2"}
              layout="fill"
              quality={100}
              priority
            />
          </div>
          <div className="relative w-full h-full  pt-[46.5%] ">
            <Image
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={"/assets/quemsomos3.png"}
              alt={"Quem somos 3"}
              layout="fill"
              quality={100}
              priority
            />
          </div>
        </Flex>
        <Flex className="px-[5%] lg:px-0 xl:max-w-[696px] max-w-[500px] w-full gap-8">
          <p className="text-center text-[18px] 2xl:text-[20px] text-secondary-pure font-[300] leading-[27px] 2xl:leading-[30px]">
            Acreditamos que a beleza vai além da estética superficial. Nossa
            missão é promover não apenas uma transformação visual, mas também
            inspirar confiança, autoestima e bem-estar.
          </p>
        </Flex>
      </Flex>
    </Flex>
  );
};
