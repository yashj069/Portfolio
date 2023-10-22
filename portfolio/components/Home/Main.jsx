import { useEffect } from "react";
import { useRouter } from "next/router";
import About from "../About/About";

const scroll2El = (elID) => {
  window.scrollTo({
    top: document.getElementById(elID).offsetTop,
    behavior: "smooth",
  });
};

export const Main = () => {
  // next routing to id doent work as expected - https://github.com/vercel/next.js/issues/44295
  const { query } = useRouter();

  useEffect(() => {
    if (query.section) {
      setTimeout(() => {
        scroll2El(query.section);
      }, 50);
    }
  }, [query]);

  return (
    <div className="relative">
      <About />
    </div>
  );
};
