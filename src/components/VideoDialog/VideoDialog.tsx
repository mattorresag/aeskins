import React, { useRef } from "react";
import { Modal } from "../Modal/SideModal";

interface Props {
  url: string;
  isModalOpen: boolean;
  handleClose: () => void;
}

export default function VideoDialog({ handleClose, url, isModalOpen }: Props) {
  return (
    <Modal isOpen={isModalOpen} handleClose={handleClose}>
      <iframe
        className="w-full h-full px-[5%]"
        src={url}
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </Modal>
  );
}
