"use client";
import styles from "../styles";
import SpotifyIcon from "../icons/SpotifyIcon";
import { footerLinks } from "../constants";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return (
    <div
      className={`${styles.xPaddings} sm:py-8 relative justify-center flex bg-color-primary animateHero pb-[45px] sm:pt-[80px] rounded-t-2xl`}
    >
      <div className="flex flex-col sm:flex-row lg:w-[60%] justify-between pb-[45px] pt-[100px] rounded-t-2xl">
        <div className="flex flex-col justify-center sm:px-0 px-2 sm:w-[80%] gap-10">
          <div className="flex gap-4 bg-color-green500 items-center py-[16px] pr-[42px] pl-[20px] rounded-[50px] h-[80px]">
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
          {isDesktopOrLaptop ? <div>© 2023 Yash Jindal</div> : <div></div>}
        </div>

        {/* // Right side */}
        <div className="flex sm:w-[50%] sm:justify-end px-10 sm:px-0 gap-10">
          <div className="flex flex-col leading-[24px] gap-5 text-font-link">
            <h1
              className={`${styles.secondaryHeading} font-[600] text-font-link`}
            >
              ElseWhere
            </h1>
            {footerLinks.map((item) => {
              return (
                <Link
                  href={item.link}
                  target="_blank"
                  className={`${styles.primaryContent} cursor-pointer text-font-link font-[600]`}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col leading-[24px] gap-5 text-font-link">
            <h1
              className={`${styles.secondaryHeading} text-font-link font-[600]`}
            >
              Contact
            </h1>
            <p
              className={`${styles.primaryContent} text-font-link font-[600] cursor-pointer`}
            >
              Message
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
