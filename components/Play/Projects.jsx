import Masonry from "react-layout-masonry";
import st from "./index.module.css";
import styles from "../../styles";
import { projectDescription } from "../../constants";

const Projects = () => {
  return (
    <Masonry className={st.collageContainer} columns={3} gap={26}>
      {projectDescription.map((item, index) => {
        return (
          <div
            key={index}
            style={{ transition: "all ease-in-out 0.3" }}
            className={`rounded-xl bg-color-white30 flex gap-10 max-w-[430px] flex-wrap p-[42px] hover:transition-all ease-in-out duration-300 translate-y-2`}
          >
            <div className="flex flex-col items-start gap-4">
              <h1 className={`${styles.primaryHeading} text-[20px] pt-0`}>
                {item.title}
              </h1>
              <p className={`${styles.primaryContent}`}>{item.description}</p>
            </div>
            <img src={item.image} className="rounded-xl" />
          </div>
        );
      })}
    </Masonry>
  );
};

export default Projects;
