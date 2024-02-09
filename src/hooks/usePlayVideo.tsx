import { useEffect, useRef } from "react";

interface Props {
  video: string;
  className: string;
}

export default function AutoPlaySilentVideo({ video, className }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleCanPlay = () => {
      videoElement.muted = true;
      videoElement
        .play()
        .then(() => alert("Video is playing"))
        .catch((e) => console.error("Error playing video", e));
    };

    videoElement.addEventListener("canplaythrough", handleCanPlay);

    // Clean up
    return () => {
      videoElement.removeEventListener("canplaythrough", handleCanPlay);
    };
  }, []);

  return (
    <>
      <video
        className={`${className}`}
        ref={videoRef}
        loop
        autoPlay={true}
        muted={true}
        playsInline={true}
        style={{ maxWidth: "100%", height: "auto" }} // Inline style for responsiveness
      >
        <source src={video} type="video/mp4" />
      </video>
    </>
  );
}
