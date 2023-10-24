"use client";

import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import styles from "../styles";
import Link from "next/link";
import { useRouter } from "next/router";
import st from "./index.module.css";

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <motion.nav
      // variants={navVariants}
      // initial="hidden"
      // whileInView="show"
      className={`${styles.xPaddings}  py-8 contain flex fixed top-0 left-0 right-0 z-[10000] justify-center`}
      style={{ maxWidth: "fit-content" }}
    >
      <div className="absolute inset-0 graident-01" />
      <div
        className={`${styles.innerWidth} flex justify-center gap-8 contain items-center px-[20px] text-[18px] bg-[#233831B2]  rounded-[50px] w-[30%] h-[60px] text-white`}
      >
        <Link
          href={"/"}
          className={`${
            pathname === "/" ? st.navbarActive : ""
          } cursor-pointer z-10`}
        >
          About
        </Link>
        <Link
          className={`${
            pathname === "/play" ? st.navbarActive : ""
          } cursor-pointer z-10`}
          href={"/play"}
        >
          Play
        </Link>
        <Link
          className={`${
            pathname === "/contact" ? st.navbarActive : ""
          } cursor-pointer z-10`}
          href="/play"
        >
          Contact
        </Link>
        <Link
          className={`${
            pathname === "/contact" ? st.navbarActive : ""
          } cursor-pointer z-10`}
          href="/play"
        >
          Contact
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
