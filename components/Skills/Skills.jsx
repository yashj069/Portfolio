import styles from "../../styles";
import { bodyVariants } from "../../utils/motion";
import { motion } from "framer-motion";
import Projects from "../Play/Projects";

const Skills = () => {
  return (
    <div
      //   variants={bodyVariants}
      //   initial="hidden"
      //   whileInView="show"
      className={`contain gap-10 items-center flex flex-col ${styles.yPaddings}`}
    >
      <div className="flex z-50">
        <h1 className={`${styles.primaryHeading}`}>Skills</h1>
        <img
          src="https://www.seanhalpin.xyz/hp/star-2.svg"
          className="w-[40px] h-[40px] sm:w-[66px] sm:h-[66px] z-1000 opacity-[1] mb-6 trans"
          style={{ transition: "all ease-in-out 0.2" }}
        />
      </div>
      <p
        className={`${styles.primaryContent} z-50 text-center text-[16px] sm:text-[22px] sm:w-[50%]`}
      >
        A collection of tools and sites I've created, designed to be helpful,
        fun, <span className="font-ampFont italic"> & </span> sometimes just a
        little bit weird.
      </p>
      <Projects />
    </div>
  );
};

export default Skills;
