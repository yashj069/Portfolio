"use client";

import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import styles from "../styles";
import Link from "next/link";
import { useRouter } from "next/router";
import st from "./index.module.css";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { pathname } = useRouter();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`py-8 contain flex fixed top-0 left-0 right-0 z-[10000] justify-center`}
      style={{ maxWidth: "fit-content" }}
    >
      <div className="absolute inset-0 graident-01" />
      <div
        className={`${styles.innerWidth} ${st.trans} ${
          scrolled ? "scrolled px-4" : ""
        } flex justify-center contain items-center sm:px-[20px] text-[18px] rounded-[50px] w-[30%] h-[60px] text-color-text-secondary`}
      >
        <Link
          href={"/"}
          className={`${
            pathname === "/" ? st.navbarActive : ""
          } cursor-pointer z-10 px-4 sm:px-6 py-[0.40rem] rounded-3xl`}
        >
          About
        </Link>
        <Link
          className={`${
            pathname === "/play" ? st.navbarActive : ""
          } cursor-pointer px-4 sm:px-6 py-[0.40rem] z-10 rounded-3xl`}
          href={"/play"}
        >
          Play
        </Link>
        <Link
          className={`${
            pathname === "/skills" ? st.navbarActive : ""
          } cursor-pointer px-4 sm:px-6 py-[0.40rem] z-10 rounded-3xl`}
          href="/skills"
        >
          Skills
        </Link>
        <Link
          className={`${
            pathname === "/contact" ? st.navbarActive : ""
          } cursor-pointer px-4 sm:px-6 py-[0.40rem] z-10 rounded-3xl`}
          href="/contact"
        >
          Contact
        </Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
