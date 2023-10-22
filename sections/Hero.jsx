"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { staggerContainer } from "../utils/motion";
import styles from "../styles";
import SpotifyIcon from "../icons/SpotifyIcon";
import faces from "../public/faces.jpg";

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6 text-white`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} flex flex-col contain`}
    >
      <div className="flex justify-center text-[50px] sm:text-[127px] items-center flex-col relative z-10 text-color-text-primary font-titleFont">
        I'm Yash.
      </div>
      <div className="flex flex-col sm:flex-row justify-center mt-[50px] w-full sm:w-[80%] mx-auto ">
        <div className="h-[474px] w-[345px] bg-green-500 rounded-t-[50%] flex flex-col justify-between">
          <Image
            src={faces}
            height="40px"
            width="40px"
            className="object-cover h-[384px] w-[384px] rounded-t-full"
          />
          <div className="bg-color-primary-accent h-[90px] px-[20px] py-[24px] flex justify-center gap-7 items-center">
            <SpotifyIcon />
            <div className="flex flex-col justify-between">
              <p className="text-[#EDE7DE] text-[.9375rem] opacity-[0.8] ">
                On repeat
              </p>
              <p className="text-[#EDE7DE] text-[.9375rem] font-semibold">
                Memory lane by shawn mendes
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mx-auto justify-start w-full sm:w-[50%] gap-4 sm:gap-10">
          <h1 className="text-font-h2-display text-color-text-primary font-[700] w-[90%] leading-[100%] sm:leading-[110%] pt-[40px] font-titleFont">
            I'm a Frontend Developer currently working at Rizzle.
          </h1>
          <p className="text-font-body leading-[160%] text-color-text-secondary font-[400]">
            Over the past 1+ years, I've worked in various areas of digital
            design, including front-end development, email, marketing, and app
            UI/UX. I'm proud to have worn many hats.
          </p>
        </div>
      </div>
    </motion.div>
  </section>
);

export default Hero;
