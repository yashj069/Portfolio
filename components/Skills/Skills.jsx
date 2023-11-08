import styles from "../../styles";
import st from "./index.module.css";
import { navVariants } from "../../utils/motion";
import { motion } from "framer-motion";
import { skillIcons } from "../../constants";
import InProgress from "./InProgress";

const Skills = () => {
  const renderSkills = () => {
    return (
      <div className={`${st.skillContainer} lg:w-[60%] px-3 md:px-0`}>
        <div
          className={`p-[24px] md:p-[40px] rounded-[20px] md:rounded-[40px] flex justify-center gap-[10px] md:gap-[30px] flex-wrap w-full animateHero1`}
        >
          {skillIcons.map((icon) => {
            return (
              <img
                src={icon}
                className="w-[44px] h-[44px] md:w-[100px] md:h-[100px] object-contain"
              />
            );
          })}
        </div>
        <div className={st.progress}></div>
      </div>
    );
  };

  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`contain gap-10 items-center flex flex-col py-[120px]`}
    >
      <div className="flex z-50">
        <h1 className="text-[50px] sm:text-[127px] trans text-color-text-primary font-titleFont">
          Skills.
        </h1>
        <img
          src="https://www.seanhalpin.xyz/hp/star-2.svg"
          className="w-[40px] h-[40px] sm:w-[66px] sm:h-[66px] z-1000 opacity-[1] mb-6 trans"
          style={{ transition: "all ease-in-out 0.2" }}
        />
      </div>
      <p
        className={`${styles.primaryContent} z-50 text-center text-[16px] px-2 sm:text-[22px] sm:w-[50%]`}
      >
        A collection of technologies and frameworks I've worked on, It was fun,{" "}
        <span className="font-ampFont italic"> & </span> a whole lot of
        experience.
      </p>
      {renderSkills()}
      <InProgress />
    </motion.div>
  );
};

export default Skills;
