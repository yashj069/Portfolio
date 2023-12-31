"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import styles from "../styles";
import { heroVariants } from "../utils/motion";
import SpotifyIcon from "../icons/SpotifyIcon";
// import faces from "../public/faces.jpg";
import fs from "../public/portf.webp";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

const Hero = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return (
    <section className={`${styles.paddings} sm:pl-16 pl-6 text-white`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} flex flex-col contain`}
      >
        <div className="flex text-color-text-primary z-10 relative justify-center">
          {isDesktopOrLaptop ? (
            <span className="flex items-end">
              <img
                src="https://www.seanhalpin.xyz/hp/star-2.svg"
                className="w-[40px] h-[40px] sm:w-[66px] sm:h-[66px] mr-[20px] flex z-1000 opacity-[1] trans"
              />
            </span>
          ) : null}
          <span className="flex flex-col items-center">
            <h1 className="font-titleFont text-[45px] xs:text-[50px] md:text-[80px] lg:text-[127px]">
              Hi. I'm Yash.
            </h1>
            <h1 className="font-titleFont text-[45px] xs:text-[50px] md:text-[80px] lg:text-[127px] mt-[-30px] md:mt-[-40px] lg:mt-[-80px]">
              A Developer.
            </h1>
          </span>
          {isDesktopOrLaptop ? (
            <span className="flex items-start lg:ml-[-100px]">
              <img
                src="https://www.seanhalpin.xyz/hp/star-2.svg"
                className="w-[40px] h-[40px] sm:w-[66px] sm:h-[66px] flex z-1000 opacity-[1] mb-10 lg:ml-[30px] trans"
              />
            </span>
          ) : null}
        </div>
        <motion.div
          variants={heroVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: "false", amount: 0.25 }}
          className="flex flex-col sm:flex-row sm:gap-20 lg:gap-0 items-center justify-center mt-[50px] w-full lg:w-[80%] mx-auto "
        >
          <div className="h-[474px] w-[345px] bg-green-500 rounded-t-[50%] flex flex-col justify-between">
            <Image
              src={fs}
              height="40px"
              width="40px"
              className="object-cover h-[384px] w-[384px] rotate-180 rounded-b-full"
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

          <div className="flex flex-col mx-auto justify-start w-full md:w-[50%] gap-4 sm:gap-10">
            <h1 className="text-font-h2-display text-color-text-primary font-[700] leading-[100%] sm:leading-[110%] pt-[40px] font-titleFont">
              I'm a Frontend Developer currently working at Rizzle.
            </h1>
            <p className="text-font-body leading-[160%] text-color-text-secondary font-[400]">
              Over the past 1+ years, I've worked in various areas, including
              front-end development, game development, backend and WEB 3.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
