import React from "react";
import { Flex } from "../../components/Flex/Flex";
import { ProdutosCards } from "../../components/Cards/ProdutosCards";
import SofidermDermSubskinImage1ml from "../../../public/assets/subskin/1_ml.png";
import SofidermDermSubskinImage2ml from "../../../public/assets/subskin/2_ml.png";
import SofidermDermSubskinImage10ml from "../../../public/assets/subskin/10_ml.png";
import SofidermDermSubskinImage20ml from "../../../public/assets/subskin/20_ml.png";
import SofidermDermPlusImage1ml from "../../../public/assets/plus/1_ml.png";
import SofidermDermPlusImage2ml from "../../../public/assets/plus/2_ml.png";
import SofidermDermPlusImage10ml from "../../../public/assets/plus/10_ml.png";
import SofidermDermPlusImage20ml from "../../../public/assets/plus/20_ml.png";
import SofidermDeepImage1ml from "../../../public/assets/deep/1_ml.png";
import SofidermDeepImage2ml from "../../../public/assets/deep/2_ml.png";
import SofidermDeepImage10ml from "../../../public/assets/deep/10_ml.png";
import SofidermDeepImage20ml from "../../../public/assets/deep/20_ml.png";
import SofidermDermImage1ml from "../../../public/assets/derm/1_ml.png";
import SofidermDermImage2ml from "../../../public/assets/derm/2_ml.png";
import SofidermDermImage10ml from "../../../public/assets/derm/10_ml.png";

import SofidermDermImage20ml from "../../../public/assets/derm/20_ml.png";
import SofidermFineLinesImage1ml from "../../../public/assets/fineline/1_ml.png";
import SofidermFineLinesImage2ml from "../../../public/assets/fineline/2_ml.png";
import SofidermFineLinesImage10ml from "../../../public/assets/fineline/10_ml.png";
import SofidermFineLinesImage20ml from "../../../public/assets/fineline/20_ml.png";


const produtos = [
  {
    title: "Sofiderm Derm Plus (1ML)",
    image: SofidermDermPlusImage1ml.src,
  },
  {
    title: "Sofiderm Derm Plus (2ML)",
    image: SofidermDermPlusImage2ml.src,
  },
  {
    title: "Sofiderm Derm Plus (10ML)",
    image: SofidermDermPlusImage10ml.src,
  },
  {
    title: "Sofiderm Derm Plus (20ML)",
    image: SofidermDermPlusImage20ml.src,
  },
  {
    title: "Sofiderm Derm Sub-skin (1ML)",
    image: SofidermDermSubskinImage1ml.src,
  },
  {
    title: "Sofiderm Derm Sub-skin (2ML)",
    image: SofidermDermSubskinImage2ml.src,
  },
  {
    title: "Sofiderm Derm Sub-skin (10ML)",
    image: SofidermDermSubskinImage10ml.src,
  },
  {
    title: "Sofiderm Derm Sub-skin (20ML)",
    image: SofidermDermSubskinImage20ml.src,
  },


  {
    title: "Sofiderm Fine Lines (1ML)",
    image: SofidermFineLinesImage1ml.src,
    isFacial: true,
  },
  {
    title: "Sofiderm Fine Lines (2ML)",
    image: SofidermFineLinesImage2ml.src,
    isFacial: true,
  },
  {
    title: "Sofiderm Fine Lines (10ML)",
    image: SofidermFineLinesImage10ml.src,
    isFacial: true,
  },
  {
    title: "Sofiderm Fine Lines (20ML)",
    image: SofidermFineLinesImage20ml.src,
    isFacial: true,
  },
  {
    title: "Sofiderm Derm (1ML)",
    image: SofidermDermImage1ml.src,
    isFacial: true,
  },
  {
    title: "Sofiderm Derm (2ML)",
    image: SofidermDermImage2ml.src,
    isFacial: true,
  },
  {
    title: "Sofiderm Derm (10ML)",
    image: SofidermDermImage10ml.src,
    isFacial: true,
  },
  {
    title: "Sofiderm Derm (20ML)",
    image: SofidermDermImage20ml.src,
    isFacial: true,
  },
  {
    title: "Sofiderm Deep (1ML)",
    image: SofidermDeepImage1ml.src,
    isFacial: true,
  },
  {
    title: "Sofiderm Deep (2ML)",
    image: SofidermDeepImage2ml.src,
    isFacial: true,
  },
  {
    title: "Sofiderm Deep (10ML)",
    image: SofidermDeepImage10ml.src,
    isFacial: true,
  },
  {
    title: "Sofiderm Deep (20ML)",
    image: SofidermDeepImage20ml.src,
    isFacial: true,
  },
];

interface Props {
  isFacial?: boolean;
}

export const Produtos = ({ isFacial = false }: Props): JSX.Element => {
  const produtosArray = produtos.filter((produto) => isFacial ? produto.isFacial : !produto.isFacial)
  return (
    <Flex
      justify="center"
      className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] sm:grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]  lg:grid-cols-[repeat(auto-fill,_minmax(400px,_1fr))] gap-8 px-[5%] 2xl:px-[160px] py-20  lg:pb-[120px] bg-white"
    >
      {produtosArray.map((produto, index) => {
        return (
          <Flex
            key={`${produto.title} - ${index}`}
          >
            <ProdutosCards title={produto.title} image={produto.image} />
          </Flex>
        );
      })}
    </Flex>
  );
};
