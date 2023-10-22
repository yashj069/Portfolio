"use client";

import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import styles from "../styles";
import Link from "next/link";

const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative contain flex justify-center`}
      style={{ maxWidth: "fit-content" }}
    >
      <div className="absolute  inset-0 graident-01" />
      <div
        className={`${styles.innerWidth} flex justify-center gap-8 contain items-center px-[20px] text-[18px] bg-[#233831B2]  rounded-[50px] w-[30%] h-[60px] text-white`}
      >
        <Link href={"/"} className="text-[#8FDCC2] cursor-pointer z-10">
          About
        </Link>
        <Link className="cursor-pointer z-10" href={"/play"}>
          Play
        </Link>
        <Link className="cursor-pointer z-10" href="/play">
          Contact
        </Link>
        <Link className="cursor-pointer z-10" href="/play">
          Contact
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
