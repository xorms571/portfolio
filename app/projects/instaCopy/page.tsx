import { portfolioInfoData } from "@/app/data";
import Image from "next/image";
const page = () => {
  const instaCopy = portfolioInfoData[1];
  return (
    <div>
      <Image src={instaCopy.img} alt={instaCopy.title}/>
      <h2>{instaCopy.title}</h2>
      <a href={instaCopy.adress}>{instaCopy.adress}</a>
      <ul className="flex gap-2">
        {instaCopy.color.map((color, index) => (
          <li key={index} style={{ backgroundColor: color }} className="w-10 h-10 border"></li>
        ))}
      </ul>
    </div>
  );
};

export default page;
