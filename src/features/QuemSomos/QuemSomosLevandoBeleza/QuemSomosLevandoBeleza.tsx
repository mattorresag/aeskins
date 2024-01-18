import React from "react";
import { Flex } from "../../../components/Flex/Flex";
import Image from "next/image";
import Icons from "../../../../public/assets/icons";

export const QuemSomosLevandoBeleza = () => {
  return (
    <Flex direction="col">
      <Flex className="flex-col lg:flex-row w-full ">
        <Flex className="w-full lg:w-[50%] h-[160px]  lg:h-[436px]">
          <Image
            className="object-cover"
            src="/assets/levandoBeleza.png"
            alt="Levando Beleza"
            height={1000}
            width={1500}
            quality={100}
            priority
          />
        </Flex>
        <Flex
          className="bg-secondary-pure py-8 w-full lg:w-[50%] px-[5%] min-[1921px]:justify-start lg:justify-center"
          align="center"
        >
          <Flex direction="col" className="gap-3">
            <p className="text-[12px] lg:text-[14px] lg:leading-[17px] leading-[14px] font-[600] text-white/90">
              NOSSA CULTURA
            </p>
            <p className="uppercase text-[32px] lg:text-[56px] leading-[48px] lg:tracking-[2px] lg:leading-[73px] font-[300] text-white">
              levando a beleza
              <br className="lg:hidden min-[1921px]:block" /> ainda mais longe
            </p>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        className="flex-col min-[1440px]:px-16 lg:py-16 py-12 2xl:px-[160px] px-[5%]"
        style={{
          background:
            "radial-gradient(602.15% 130.28% at 2.73% 13.33%, rgba(6, 247, 132, 0.10) 0%, rgba(255, 255, 255, 0.00) 47.93%, rgba(6, 247, 132, 0.10) 100%), linear-gradient(0deg, #FFF 0%, #FFF 100%), #F0F0F0",
        }}
      >
        <Flex className="pb-8 lg:py-8 border-b-[1px] border-black/10 lg:items-center  gap-6 flex-col lg:flex-row justify-start lg:justify-between w-full">
          <Icons.InovacaoMobile className="w-10 h-10 lg:hidden" />
          <p className="lg:basis-1/3 text-[32px] lg:text-[28px] min-[1440px]:text-[40px] min-[1440px]:leading-[52px] lg:tracking-[2px] leading-[48px] uppercase text-secondary-pure">
            Inovação
          </p>
          <Icons.Inovacao className="w-fit hidden lg:block w-20 h-20" />
          <p className="lg:basis-1/3 text-[16px] text-secondary-pure leading-[24px] lg:text-[18px] lg:leading-[27px] lg:font-[300]">
            Buscamos sempre introduzir produtos e soluções estéticas que
            transcendam as expectativas. Nossa abordagem vanguardista em
            biotecnologia reflete-se em cada produto, promovendo resultados
            revolucionários e uma experiência estética única.
          </p>
        </Flex>
        <Flex className="py-8 border-b-[1px] border-black/10 lg:items-center  gap-6 flex-col lg:flex-row justify-start lg:justify-between w-full">
          <Icons.ComprometimentoMobile className="w-10 h-10 lg:hidden" />
          <p className="lg:basis-1/3 text-[32px] lg:text-[28px] min-[1440px]:text-[40px] min-[1440px]:leading-[52px] lg:tracking-[2px] leading-[48px] uppercase text-secondary-pure">
            COMPROMETIMENTO
          </p>
          <Icons.Comprometimento className="w-fit hidden lg:block w-20 h-20" />
          <p className="lg:basis-1/3 text-[16px] text-secondary-pure leading-[24px] lg:text-[18px] lg:leading-[27px] lg:font-[300]">
            Nosso compromisso com a excelência é a espinha dorsal da Aeskins.
            Com uma equipe de especialistas dedicados e mais de duas décadas de
            experiência, estamos empenhados em oferecer produtos e serviços que
            refletem nossa paixão pela beleza e contribuem significativamente
            para a satisfação de nossos clientes.
          </p>
        </Flex>
        <Flex className="py-8  lg:items-center  gap-6 flex-col lg:flex-row justify-start lg:justify-between w-full">
          <Icons.BemestarMobile className="w-10 h-10 lg:hidden" />
          <p className="lg:basis-1/3 text-[32px] lg:text-[28px] min-[1440px]:text-[40px] min-[1440px]:leading-[52px] lg:tracking-[2px] leading-[48px] uppercase text-secondary-pure">
            Bem-Estar
          </p>
          <Icons.Bemestar className="w-fit hidden lg:block w-20 h-20" />
          <p className="lg:basis-1/3 text-[16px] text-secondary-pure leading-[24px] lg:text-[18px] lg:leading-[27px] lg:font-[300]">
            Além de realçar a estética, a Aeskins tem um compromisso intrínseco
            com o bem-estar integral. Nossa missão é promover a beleza com
            propósito, inspirando confiança e autoestima. Ao proporcionar uma
            jornada de beleza que se estende além da superfície, colocamos o
            bem-estar emocional e físico dos nossos clientes no centro de nossas
            preocupações.
          </p>
        </Flex>
      </Flex>
    </Flex>
  );
};
