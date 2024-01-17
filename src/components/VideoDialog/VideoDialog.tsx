import React from "react";

interface Props {
  id: string
  url: string
}

export default function VideoDialog({ id, url }: Props) {

  return (
    <dialog id={id} className="modal modal-middle">
      <div className="modal-box overflow-hidden  max-w-none lg:w-[70vw] w-[90vw] h-[50vh] lg:h-[70vh] rounded-md  ">

        <div className="mt-2 w-full h-full">
          <iframe
            className="w-full h-full"
            src={url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          >

          </iframe>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>

    </dialog>
  );
}
