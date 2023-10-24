import Masonry from "react-layout-masonry";
import st from "./index.module.css";
import styles from "../../styles";
import { projectDescription } from "../../constants";
import { useMediaQuery } from "react-responsive";

const Projects = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return (
    typeof window !== "undefined" && (
      <Masonry
        className={isDesktopOrLaptop ? st.collageContainer : ""}
        columns={isDesktopOrLaptop ? 3 : 1}
        gap={isDesktopOrLaptop ? 26 : 16}
      >
        {projectDescription.map((item, index) => {
          return (
            <div
              key={index}
              style={{ transition: "all ease-in-out 0.3" }}
              className={`rounded-xl bg-color-white30 flex gap-10 max-w-[430px] flex-wrap p-[24px] sm:p-[42px]`}
            >
              <div className="flex flex-col items-start gap-4">
                <h1
                  className={`text-color-text-primary font-[700] leading-[110%] font-titleFont text-[20px] pt-0`}
                >
                  {item.title}
                </h1>
                <p className={`${styles.primaryContent}`}>{item.description}</p>
              </div>
              <img src={item.image} className="rounded-xl" />
            </div>
          );
        })}
      </Masonry>
    )
  );
};

export default Projects;
