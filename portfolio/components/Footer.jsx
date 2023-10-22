"use client";
import styles from "../styles";
import SpotifyIcon from "../icons/SpotifyIcon";
import { footerLinks } from "../constants";

const Footer = () => (
  <div
    className={`${styles.xPaddings} sm:py-8 relative bg-color-primary pb-[45px] sm:pt-[80px] rounded-t-2xl`}
  >
    <div className="flex flex-col sm:flex-row justify-between sm:w-[60%] mx-auto pb-[45px] pt-[100px] rounded-t-2xl">
      <div className="flex flex-col justify-between sm:px-0 px-2 sm:w-[50%] gap-10">
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
        <div>© 2023 Yash Jindal</div>
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
              <p
                className={`${styles.primaryContent} cursor-pointer text-font-link font-[600]`}
              >
                {item}
              </p>
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

export default Footer;
