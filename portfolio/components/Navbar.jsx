"use client";

import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import styles from "../styles";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute  inset-0 graident-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-center gap-8 items-center text-[18px] bg-[#233831B2]  rounded-[50px] w-[30%] h-[60px] text-white`}
    >
      <h1 className="text-[#8FDCC2]">About</h1>
      <h1>Play</h1>
      <h1>Contact</h1>
      <h1>Contact</h1>
    </div>
  </motion.nav>
);

export default Navbar;
