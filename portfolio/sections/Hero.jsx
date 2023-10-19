"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import styles from "../styles";
import SpotifyIcon from "../icons/SpotifyIcon";

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6 text-white`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center text-[127px] items-center flex-col relative z-10">
        I'm Yash.
      </div>
      <div className="flex justify-center gap-[80px] mt-[140px] w-[100%]">
        <div className=" h-[384px] w-[345px] bg-green-500 rounded-t-[50%] flex flex-col justify-between">
          <div>Image</div>
          <div className="bg-[#8FDCC2] h-[90px] px-[20px] py-[24px] flex justify-between items-center text-[#233831] text-[15px] font-semibold">
            {/* <div>Image</div> */}
            <SpotifyIcon />
            <div className="flex flex-col justify-between">
              <p>On repeat</p>
              <p>Memory lane by shawn mendes</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between w-[50%]">
          <h1 className="text-[56px] leading-[60px] pt-[40px]">
            I'm a Frontend Developer currently working at Rizzle.
          </h1>
          <h1 className="text-[22px]">
            Over the past 1+ years, I've worked in various areas of digital
            design, including front-end development, email, marketing, and app
            UI/UX. I'm proud to have worn many hats.
          </h1>
        </div>
      </div>
    </motion.div>
  </section>
);

export default Hero;
