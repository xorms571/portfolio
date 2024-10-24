type imgProps = {
  src: string;
  alt: string;
  other?: string;
};
const Image = ({ alt, src, other }: imgProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-full object-cover ${other}`}
    />
  );
};

export default Image;
