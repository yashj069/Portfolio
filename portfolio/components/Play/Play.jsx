import styles from "../../styles";
import Projects from "./Projects";

const Play = () => {
  return (
    <div className="flex flex-col justify-between items-center gap-10 pb-10 contain">
      <div className="flex justify-center mx-auto  items-center flex-col relative z-10  ">
        <h1 className="text-[50px] sm:text-[127px] text-color-text-primary font-titleFont">
          Play.
        </h1>
        <img
          src="https://www.seanhalpin.xyz/hp/star-2.svg"
          className="w-[60px] h-[60px] z-1000 opacity-[1]"
        />
        <p
          className={`${styles.primaryContent} text-center text-[22px] w-[70%]`}
        >
          A collection of tools and sites I've created, designed to be helpful,
          fun, <span className="font-ampFont italic"> & </span> sometimes just a
          little bit weird.
        </p>
      </div>
      <Projects />
    </div>
  );
};

export default Play;
