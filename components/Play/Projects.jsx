import Masonry from "react-layout-masonry";
import st from "./index.module.css";
import styles from "../../styles";
import { projectDescription } from "../../constants";
import { useMediaQuery } from "react-responsive";

const Projects = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return (
    typeof window !== "undefined" && (
      <Masonry
        className={`${
          isDesktopOrLaptop ? st.collageContainer : ""
        } px-6 sm:px-0`}
        columns={isDesktopOrLaptop ? 3 : isTablet ? 2 : 1}
        gap={isDesktopOrLaptop ? 26 : 16}
      >
        {projectDescription.map((item, index) => {
          return (
            <a
              key={index}
              href={item.link}
              target="_blank"
              className={`${st.project} project rounded-xl z-50 bg-color-white30 flex gap-10 max-w-[430px] flex-wrap p-[24px] sm:p-[42px]`}
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
            </a>
          );
        })}
      </Masonry>
    )
  );
};

export default Projects;
