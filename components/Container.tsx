import { pagesData } from "@/app/data";
import DataCard from "./DataCard";
import Layout from "./Layout";
type ContainerProps = {
  data: "instaCopy" | "myForum" | "sunshine" | "weatherApp" | "webbler";
};
const Container = ({ data }: ContainerProps) => {
  return (
    <div className="contaiiner">
      <Layout />
      <DataCard data={pagesData[data]} />
    </div>
  );
};

export default Container;
