import React from "react";
import { Flex } from "../../../components/Flex/Flex";
import Icons from "../../../../public/assets/icons";

export const FaleConosco = () => {
  return (
    <Flex
      direction="col"
      className="mt-20 lg:mt-[120px] w-full lg:px-16 lg:pb-20 pb-8"
    >
      <Flex
        direction="col"
        align="center"
        style={{
          background:
            "radial-gradient(602.15% 130.28% at 2.73% 13.33%, rgba(6, 247, 132, 0.10) 0%, rgba(255, 255, 255, 0.00) 47.93%, rgba(6, 247, 132, 0.10) 100%), #F0F0F0",
        }}
        className="gap-6 lg:gap-8 py-12 px-[5%] lg:px-[96px]"
      >
        <Flex direction="col" className="gap-8 text-center" align="center">
          <p className="text-[32px] leading-[48px] text-secondary-pure font-[300] lg:text-[48px] lg:leading-[63px] lg:tracking-[2px]">
            FICOU COM DÚVIDA?{" "}
            <span className="leading-[36px] lg:leading-[63px] font-[600] italic tracking-[2px]">
              FALE CONOSCO
            </span>
          </p>
          <Icons.LetterLine className="w-[281px] h-5" />
        </Flex>
        <Flex
          className="bg-white w-full px-[5%] py-6 lg:px-6 flex-col lg:flex-row"
          align="center"
        >
          <Flex
            justify="between"
            className="w-full gap-8 flex-col h-full xl:flex-row "
          >
            <Flex direction="col" className="gap-1 max-w-[477px]">
              <Flex direction="col" className="gap-2">
                <Icons.House className="w-6 h-6" />
                <p className="text-[14px] text-neutral-pure900 font-[600] leading-[17px]">
                  VISITE-NOS
                </p>
              </Flex>
              <p className="xl:text-[14px] 2xl:text-[16px] text-[16px] text-neutral-pure500 leading-[24px]">
                PARANA, NUMERO: 107, SALA 30 ANDAR 2, CHACARA DO SOLAR I
                (FAZENDINHA) - SANTANA DE PARNAÍBA, SP 06530-025
              </p>
            </Flex>
            <Flex direction="col" className="gap-1 max-w-[477px]">
              <Flex direction="col" className="gap-2">
                <Icons.Whatsapp className="w-6 h-6" />
                <p className="text-[14px] text-neutral-pure900 font-[600] leading-[17px]">
                  CONTATO
                </p>
              </Flex>
              <p className="xl:text-[14px] 2xl:text-[16px] text-[16px] text-neutral-pure500 leading-[24px]">
                0800 883 6193
              </p>
            </Flex>
            <Flex direction="col" className="gap-1 max-w-[477px]">
              <Flex direction="col" className="gap-2">
                <Icons.Email className="w-6 h-6" />
                <p className="text-[14px] text-neutral-pure900 font-[600] leading-[17px]">
                  E-MAIL
                </p>
              </Flex>
              <p className="xl:text-[14px] 2xl:text-[16px] text-[16px] text-neutral-pure500 leading-[24px]">
                Aeskins@example.com
              </p>
            </Flex>
            <button className="xl:w-fit w-full py-2 px-6 h-14 xl:h-[101px] rounded-none bg-secondary-pure text-white text-[16px] font-[600]">
              <Flex className="gap-2 items-center justify-between">
                <p>ENTRAR EM CONTATO</p>{" "}
                <Icons.WhiteArrowRight className="w-6 h-6" />
              </Flex>
            </button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
