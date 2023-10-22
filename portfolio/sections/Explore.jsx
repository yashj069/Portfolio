"use client";
import { collaborate } from "../constants";
import styles from "../styles";

const Explore = () => {
  return (
    <section
      id="explore"
      className={`${styles.paddings} w-full bg-color-primary`}
    >
      <div className="flex flex-col sm:flex-row sm:flex-wrap bg-color-white30 rounded-[64px] p-paddin sm:px-[120px] gap-y-[40px]">
        {collaborate.map((item, idx) => {
          return (
            <div className="flex flex-col sm:w-[50%] justify-start">
              <h1 className="font-titleFont mb-[24px] text-[42px] text-color-text-primary opacity-[0.5]">
                0{idx + 1}
              </h1>
              <h2 className={`${styles.secondaryHeading}`}>{item.title}</h2>
              <p
                className={`${styles.primaryContent} mt-spacing-xxs sm:w-[90%]`}
              >
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Explore;
