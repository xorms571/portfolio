"use client";
import { portfolioInfoData } from "@/app/data";
import Image from "./Image";
interface dataCardsProps {
  data: (typeof portfolioInfoData)[number]; // portfolioInfoData 배열의 항목 타입
}
const DataCard: React.FC<dataCardsProps> = ({ data }) => {
  return (
    <div className="datacard flex h-96 gap-5">
      <div className="cardimg max-w-96 rounded-md overflow-hidden">
        <Image src={data.img} alt={data.title} />
      </div>
      <div className="carddesc flex flex-col max-w-96 gap-3">
        <h2 className="text-2xl font-bold">{data.title}</h2>
        <a href={data.adress} className="underline">
          {data.adress}
        </a>
        <div>
          <h3 className="text-xl border-b mb-2">
            <span className="w-5">📃</span>
            <span className="ml-2">desc</span>
          </h3>
          <p
            dangerouslySetInnerHTML={{ __html: data.desc }}
            className="text-sm"
          />
        </div>
        <div className="paltechbox flex gap-5">
          <ul className="flex flex-col gap-2 w-28">
            <h3 className="text-xl border-b">
              <span className="w-5">🎨</span>
              <span className="ml-2">colors</span>
            </h3>
            {data.color.map((color, i) => (
              <li key={i} className="flex items-center gap-2">
                <div
                  style={{ backgroundColor: color }}
                  className="w-5 h-5 border border-gray-500"
                ></div>
                <p>{color}</p>
              </li>
            ))}
          </ul>
          <div>
            <h3 className="text-xl border-b w-full mb-2">
              <span className="w-5">&#128736;</span>
              <span className="ml-2">techs</span>
            </h3>
            <ul className="flex gap-2 flex-wrap">
              {data.tech.map((x, i) => (
                <li key={i} className="flex items-center gap-1 mr-3">
                  <div className="w-5 h-5">
                    <Image
                      src={x[0]}
                      alt={x[1]}
                      other="drop-shadow-[0_0_1px_rgba(255,255,255,0.5)]"
                    />
                  </div>
                  <p>{x[1]}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCard;
