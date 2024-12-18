import { pagesData } from "@/app/data";
import DataCard from "./DataCard";
import Layout from "./Layout";
type ContainerProps = {
  data: "instaCopy" | "myForum" | "sunshine" | "weatherApp" | "webbler" | "apiProject";
};
const Container = ({ data }: ContainerProps) => {
  return (
    <div className="contaiiner m-0 m-auto h-screen flex flex-col justify-center">
      <Layout />
      <DataCard data={pagesData[data]} />
    </div>
  );
};

export default Container;
