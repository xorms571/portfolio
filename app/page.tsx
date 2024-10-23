import Link from "next/link";
import { portfolioInfoData } from "./data";

export default function Home() {
  return <>
  <nav className="text-white flex flex-col h-screen gap-3 justify-center items-center">
    {portfolioInfoData.map((x)=>{
      return <Link key={x.title} href={x.link}>
        {x.title}
      </Link>
    })}
  </nav>
  </>;
}
