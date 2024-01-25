import React from "react";
import { Flex } from "../../components/Flex/Flex";
import { ProdutosCards } from "../../components/Cards/ProdutosCards";
import useWindowWidth from "../../hooks/useWindowWidth";

const produtos = [
  {
    title: "Sofiderm Derm Sub-Skin (20ML) Cx 01 Uni",
    image: "/assets/produto1.png",
  },
  {
    title: "Sofiderm Derm Sub-Skin (10ML) Cx 01 Uni",
    image: "/assets/produto1.png",
  },
  {
    title: "Aesteril Hialonidase 1500 IO - Hidratante",
    image: "/assets/produto2.png",
  },
  {
    title: "Nome do produto",
  },
  {
    title: "Nome do produto",
  },
  {
    title: "Nome do produto",
  },
];

export const Produtos = (): JSX.Element => {
  const width = useWindowWidth();
  return (
    <Flex
      style={{
        gridTemplateAreas:
          width > 639
            ? ` 
        'card1 card2 card3'
        'card4 card5 card6'
      `
            : `
        'card1'
        'card2'
        'card3'
        'card4'
        'card5'
        'card6'
      `,
      }}
      justify="center"
      className="grid sm:gap-8 px-[5%] 2xl:px-[160px] py-20 bg-white lg:pb-30"
    >
      {produtos.map((produto, index) => {
        if (width < 1024 && index > 2) return <></>;
        return (
          <Flex
            key={`${produto.title} - ${index}`}
            className="justify-self-center w-full"
            style={{
              gridArea: `card${index + 1}`,
            }}
          >
            <ProdutosCards title={produto.title} image={produto.image} />
          </Flex>
        );
      })}
    </Flex>
  );
};
