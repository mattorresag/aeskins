interface Props {
  video: string;
  className: string;
}

export default function AutoPlaySilentVideo({ video, className }: Props) {

  return (
    <video
      className={`${className} hidden lg:block`}
      loop
      autoPlay={true}
      muted={true}
      playsInline={true}
      style={{ maxWidth: "100%", height: "auto" }} // Inline style for responsiveness
    >
      <source src={video} type="video/mp4" />
    </video>
  );
}
