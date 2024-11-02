import { pagesData } from "@/app/data";
import DataCard from "./DataCard";
import Layout from "./Layout";
type ContainerProps = {
  data: "instaCopy" | "myForum" | "sunshine" | "weatherApp" | "webbler" | "apiProject";
};
const Container = ({ data }: ContainerProps) => {
  return (
    <div className="contaiiner py-52 px-96 h-screen flex flex-col justify-center">
      <Layout />
      <DataCard data={pagesData[data]} />
    </div>
  );
};

export default Container;
