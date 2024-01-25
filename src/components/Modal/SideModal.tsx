import React, { useEffect, useState } from "react";
import { Flex } from "../Flex/Flex";
interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}
export const Modal = ({
  children,
  isOpen,
  handleClose,
}: Props): JSX.Element => {
  const [dialogStyle, setDialogStyle] = useState({});

  useEffect(() => {
    if (isOpen) {
      // Set the style to slide in
      setDialogStyle({
        transform: "translateY(0)",
        transition: "transform 0.2s ease-out",
      });
    } else {
      // Delay the off-screen style to allow for animation
      const timer = setTimeout(() => {
        setDialogStyle({
          transform: "translateY(100%)",
          transition: "transform 0.2s ease-in",
        });
      }, 10); // A short delay

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      // Prevent scrolling on the body
      body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling when the dialog is closed
      body.style.overflow = "";
    }

    // Clean up by resetting overflow when the component unmounts
    return () => {
      body.style.overflow = "";
    };
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    // Close dialog if click is on the overlay, not the dialog content
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };
  return (
    <>
      {isOpen && (
        <div
          className="fixed h-screen w-screen inset-0 bg-black bg-opacity-50 flex items-end z-[100000]"
          onClick={handleOverlayClick}
        >
          <Flex
            className="h-[30dvh] md:h-[50dvh] w-[90dvw] lg:h-[70%] absolute m-auto left-0 top-0 right-0 bottom-0  w-full lg:w-[55%]"
            style={dialogStyle}
          >
            {children}
          </Flex>
        </div>
      )}
    </>
  );
};
