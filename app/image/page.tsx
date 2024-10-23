type imgProps = {
  src:string,
  alt:string
}
const page = ({alt,src}:imgProps) => {
  return (
    <img src={src} alt={alt} />
  );
};

export default page;