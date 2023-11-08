import styles from "../../styles";
import st from "./index.module.css";
import { inProgressIcon } from "../../constants";

const InProgress = () => {
  const renderSkills = () => {
    return (
      <div className={`${st.skillContainer} px-1 lg:w-[60%]`}>
        <div
          className={`p-[40px] rounded-[20px] md:rounded-[40px] flex bg-[#c7b8a7] justify-center gap-[20px] md:gap-[30px] flex-wrap w-full animateHero1`}
        >
          {inProgressIcon.map((icon) => {
            return (
              <img
                src={icon}
                className={`w-[64px] h-[64px] md:w-[150px] md:h-[150px] object-contain`}
              />
            );
          })}
        </div>
        <div className={st.progress}></div>
      </div>
    );
  };

  return (
    <div className={`contain gap-10 items-center flex flex-col `}>
      <div className="flex z-50">
        <h1 className="text-[50px] sm:text-[127px] trans text-color-text-primary font-titleFont">
          InProgress.
        </h1>
        <img
          src="https://www.seanhalpin.xyz/hp/star-2.svg"
          className="w-[40px] h-[40px] sm:w-[66px] sm:h-[66px] z-1000 opacity-[1] mb-6 trans"
          style={{ transition: "all ease-in-out 0.2" }}
        />
      </div>
      <p
        className={`${styles.primaryContent} z-50 text-center text-[16px] sm:text-[22px] px-2 sm:w-[50%]`}
      >
        Continously expanding my skillset to keep up with the latest technology
        trends.
      </p>
      {renderSkills()}
    </div>
  );
};

export default InProgress;
