import styles from "../../styles";
import { bodyVariants } from "../../utils/motion";
import Projects from "./Projects";
import { motion } from "framer-motion";

const Play = () => {
  return (
    <motion.div
      variants={bodyVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} flex flex-col justify-between items-center gap-10 contain`}
    >
      <div className="flex justify-center mx-auto items-center flex-col relative z-10">
        <div className="flex items-center">
          <h1 className="text-[50px] sm:text-[127px] trans text-color-text-primary font-titleFont">
            Play.
          </h1>
          <img
            src="https://www.seanhalpin.xyz/hp/star-2.svg"
            className="w-[66px] h-[66px] z-1000 opacity-[1] mb-10 trans"
            style={{ transition: "all ease-in-out 0.2" }}
          />
        </div>
        <p
          className={`${styles.primaryContent} text-center text-[22px] w-[70%]`}
        >
          A collection of tools and sites I've created, designed to be helpful,
          fun, <span className="font-ampFont italic"> & </span> sometimes just a
          little bit weird.
        </p>
      </div>
      <Projects />
    </motion.div>
  );
};

export default Play;
