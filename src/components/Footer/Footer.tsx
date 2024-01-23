import React from "react";
import { Flex } from "../Flex/Flex";
import Link from "next/link";
import Image from "next/image";
import Icons from "../../../public/assets/icons";
export const Footer = (): JSX.Element => {
  return (
    <footer className="static bottom-0 z-50 w-full overflow-hidden">
      <Flex
        direction="col"
        className="lg:items-center lg:justify-center bg-black dark:bg-black w-full "
      >
        <Flex className="relative w-full gap-12 lg:gap-14 justify-center  lg:justify-between px-[5%] min-[1800px]:px-16 min-[1921px]:px-[5%] items-center flex-col lg:flex-row py-10 lg:py-8">
          <Flex
            className="gap-2 lg:hidden absolute top-1 right-1 cursor-pointer "
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            align="center"
          >
            <Icons.WhiteChevronUp className="w-[28px] h-[28px]" />
          </Flex>
          <Icons.LogoGrande className=" h-[120px] w-[178px]" />
          <Flex
            direction="col"
            className="items-end lg:h-[120px]"
            justify="between"
          >
            <Flex
              className="gap-2 cursor-pointer hidden lg:flex"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              align="center"
            >
              <p className="text-white text-[14px] font-[400] leading-[21px]">
                Voltar ao topo
              </p>
              <Icons.WhiteChevronUp className="w-[28px] h-[28px]" />
            </Flex>
            <Flex className="gap-4  flex-col lg:flex-row" align="center">
              <Flex className="gap-4">
                <Link href="https://www.instagram.com/aeskins.pharma" passHref>
                  <a
                    className="cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Flex className="gap-[6px]" align="center">
                      <Icons.Instagram className="w-[49px] h-12 hidden lg:block" />
                      <Icons.MobileInstagram className="w-[49px] h-12 lg:hidden" />
                      <p className="text-[14px] text-white/70 hidden lg:block">
                        Instagram
                      </p>
                    </Flex>
                  </a>
                </Link>
                <Link href="https://www.youtube.com/@aeskinspharma" passHref>
                  <a
                    className="cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Flex className="gap-[6px]" align="center">
                      <Icons.Facebook className="w-[49px] h-12 hidden lg:block" />
                      <Icons.MobileFacebook className="w-[49px] h-12 lg:hidden" />
                      <p className="text-[14px] text-white/70 hidden lg:block">
                        Facebook
                      </p>
                    </Flex>
                  </a>
                </Link>
                <Link href="https://www.youtube.com/@aeskinspharma" passHref>
                  <a
                    className="cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Flex className="gap-[6px]" align="center">
                      <Icons.Linkedin className="w-[49px] h-12 hidden lg:block" />
                      <Icons.MobileLinkedin className="w-[49px] h-12 lg:hidden" />
                      <p className="text-[14px] text-white/70 hidden lg:block">
                        LinkedIn
                      </p>
                    </Flex>
                  </a>
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex className="w-full border-y-[1px] border-white/10">
          <Flex className="flex-col lg:flex-row max-[1800px]:max-w-[1792px] relative w-full  lg:gap-0 justify-start  lg:justify-between  min-[1800px]:px-0 min-[1921px]:px-[5%]">
            <Flex
              direction="col"
              className="lg:border-r-[1px] border-b-[1px] border-white/10 gap-8 py-6 lg:py-16 lg:px-20 w-full lg:w-[50%]  justify-start lg:justify-center"
            >
              <Flex direction="col" className="px-[5%] lg:px-0">
                <p className="text-[32px] text-white leading-[48px]">
                  FIQUE POR DENTRO DAS NOVIDADES!
                </p>
                <p className="text-[16px] text-white/70 leading-[24px]">
                  Cadastre seu e-mail e fique sabendo primeiro de todas as
                  nossas promoções e lançamentos.
                </p>
              </Flex>
              <Flex className="items-center w-full gap-2 px-[5%] lg:px-0">
                <p className="w-full h-14 px-[14px] py-3 border-b-[1px] border-white/10 text-white/70 text-[16px]">
                  Endereço de e-mail
                </p>
                <button>
                  <Icons.EmailButton className="h-14 w-14" />
                </button>
              </Flex>
            </Flex>
            <Flex className="flex-col py-8 px-[5%] gap-8 lg:gap-10 lg:flex-row w-full lg:w-[50%] lg:px-20 lg:py-16">
              <Flex className=" w-full gap-4" direction="col">
                <Link href="/sobre" passHref>
                  <a>
                    <p className="text-[20px] text-white leading-[30px] cursor-pointer">
                      Quem somos
                    </p>
                  </a>
                </Link>
                <Link href="/sobre" passHref>
                  <a>
                    <p className="text-[20px] text-white leading-[30px] cursor-pointer">
                      Blogs e Artigos
                    </p>
                  </a>
                </Link>
                <Link href="/sobre" passHref>
                  <a>
                    <p className="text-[20px] text-white leading-[30px] cursor-pointer">
                      Depoimentos
                    </p>
                  </a>
                </Link>
                <Link href="/encontre-uma-clinica" passHref>
                  <a>
                    <p className="text-[20px] text-white leading-[30px] cursor-pointer">
                      Encontre uma clínica
                    </p>
                  </a>
                </Link>
                <Link href="/profissionais" passHref>
                  <a>
                    <p className="text-[20px] text-white leading-[30px] cursor-pointer">
                      Para profissionais
                    </p>
                  </a>
                </Link>
                <Link href="/sobre" passHref>
                  <a>
                    <p className="text-[20px] text-white leading-[30px] cursor-pointer">
                      Community
                    </p>
                  </a>
                </Link>
              </Flex>
              <Flex className=" w-full gap-6" direction="col">
                <p className="text-[20px] text-white leading-[30px] cursor-pointer">
                  Produtos
                </p>
                <Flex direction="col" className="gap-2">
                  <Link href="/sobre" passHref>
                    <a>
                      <p className="text-[16px] text-white/70 leading-[30px] cursor-pointer">
                        Linha x
                      </p>
                    </a>
                  </Link>
                  <Link href="/sobre" passHref>
                    <a>
                      <p className="text-[16px] text-white/70 leading-[30px] cursor-pointer">
                        Linha x
                      </p>
                    </a>
                  </Link>
                  <Link href="/sobre" passHref>
                    <a>
                      <p className="text-[16px] text-white/70 leading-[30px] cursor-pointer">
                        Linha x
                      </p>
                    </a>
                  </Link>
                  <Link href="/sobre" passHref>
                    <a>
                      <p className="text-[16px] text-white/70 leading-[30px] cursor-pointer">
                        Linha x
                      </p>
                    </a>
                  </Link>
                  <Link href="/sobre" passHref>
                    <a>
                      <p className="text-[16px] text-white/70 leading-[30px] cursor-pointer">
                        Linha x
                      </p>
                    </a>
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex className=" lg:mt-12 justify-center lg:justify-between text-center lg:text-start text-[16px] lg:text-[14px] xl:text-[16px] text-white/70 w-full gap-4 px-[5%] min-[1800px]:px-16 min-[1921px]:px-[5%] items-center flex-col lg:flex-row lg:py-6 py-8">
          <Flex className="gap-4 flex-col lg:flex-row" align="center">
            <p> R. Nome da rua, Nº - Cidade/UF - CEP 00000-000</p>
            <p className="lg:hidden">--</p>
            <p className="hidden lg:block text-white/40">|</p>
            <p>Termos de Uso</p>
            <p>•</p>
            <p>Política de Privacidade</p>
          </Flex>
          <Flex
            className="lg:mt-0 gap-6 mt-14 flex-col lg:flex-row"
            align="center"
          >
            <p> Nós aceitamos:</p>
            <Icons.PaymentMethods className="h-8 w-[166px]" />
          </Flex>
        </Flex>
      </Flex>
    </footer>
  );
};
