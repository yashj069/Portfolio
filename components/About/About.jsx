"use client";
import { Explore, GetStarted, Hero } from "../../sections";
import styles from "../../styles";
import { motion } from "framer-motion";
import { bodyVariants, navVariants } from "../../utils/motion";

const About = () => (
  <motion.div
    variants={bodyVariants}
    initial="hidden"
    whileInView="show"
    className={`contain`}
  >
    <Hero />
    <section
      className={`${styles.xPaddings} sm:ml-[21%] relative bg-color-primary md:rounded-l-2xl`}
    >
      <div className="flex flex-col gap-8 rounded-l-lg">
        <h1 className={`${styles.primaryHeading} font-semibold`}>
          Let's collaborate if you're committed to sustainability, education,
          equality, or carbon neutrality.
        </h1>
        <p className={`${styles.primaryContent} sm:w-[65%] text-justify`}>
          I believe we should leave this Earth as good as or better than we
          found it for future generations; my goal is to contribute to those
          ideals in whatever way I can. If you feel the same, I'd love to talk.
        </p>
      </div>
    </section>
    <Explore />
    <GetStarted />
  </motion.div>
);

export default About;
