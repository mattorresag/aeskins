import React from "react";
import { Modal } from "../../components/Modal/SideModal";
import { Flex } from "../../components/Flex/Flex";
import Image from "next/image";

interface Props {
  image: string;
  isModalOpen: boolean;
  handleClose: () => void;
}

export default function ProdutoDialog({ handleClose, image, isModalOpen }: Props) {
  return (
    <Modal isOpen={isModalOpen} handleClose={handleClose}>
      <Flex className="w-full rounded-[6px] bg-white h-full px-[5%] justify-center items-center">
        <Image
          src={image}
          alt="Imagem do produto"
          className="object-contain"
          layout="fill"
          width={500}
          height={500}
        />
      </Flex>
    </Modal>
  );
}
