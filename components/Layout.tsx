"use client";
import { portfolioInfoData } from "@/app/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Layout = () => {
  const pathname = usePathname(); // 현재 경로를 가져오는 hook

  // 경로가 해당 링크와 일치하는지 확인하는 함수
  const isClick = (x: string) => {
    return pathname.includes(x) ? "text-black bg-white" : 'text-white'; // 현재 경로에 맞게 클래스 이름 반환
  };

  return (
    <div className="layout">
      <div className="mb-5 flex flex-col gap-2">
        <h1 className="text-3xl font-bold">곽태근 portfolio</h1>
        <p>📧 xorms6865@naver.com</p>
        <p>📱 010 - 7712 - 3610</p>
      </div>
      <nav className="text-white flex gap-2 mb-5 flex-wrap">
        {portfolioInfoData.map((x) => {
          return (
            <Link
              key={x.title}
              href={x.link}
              className={`${isClick(x.link)} px-2 rounded-md`}
            >
              {x.title}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Layout;
