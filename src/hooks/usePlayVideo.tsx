interface Props {
  video: string;
  className: string;
}

export default function AutoPlaySilentVideo({ video, className }: Props) {
  return (
    <video
      className={`${className} `}
      loop
      autoPlay={true}
      muted={true}
      playsInline={true}
    >
      <source src={video} type="video/mp4" />
    </video>
  );
}
