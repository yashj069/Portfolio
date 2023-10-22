"use client";
import { aboutDesc } from "../constants";
import styles from "../styles";

const GetStarted = () => (
  <section
    className={`${styles.paddings} ${styles.innerWidth} relative z-10 w-full contain`}
  >
    <div
      className={`${styles.primaryContent} text-font-body flex flex-col gap-8 px-2 sm:px-0  sm:w-[60%] mx-auto justify-between`}
    >
      {aboutDesc.map((desc) => {
        return <p>{desc}</p>;
      })}
    </div>
  </section>
);

export default GetStarted;
