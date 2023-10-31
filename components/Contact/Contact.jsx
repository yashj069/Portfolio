import { useRef, useState } from "react";
import styles from "../../styles";
import { motion } from "framer-motion";
import { navVariants } from "../../utils/motion";

const Contact = () => {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const textareaRef = useRef(null);

  // use localstorage

  const handleTextChange = (e) => {
    setText(e.target.value);
    autoExpand();
  };

  const autoExpand = () => {
    const input = textareaRef.current;
    input.style.height = "auto";
    input.style.height = `${input.scrollHeight}px`;
  };

  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="flex contain items-center "
    >
      <div className="mt-[100px] flex flex-col justify-between">
        <h1 className="flex justify-center text-[50px] sm:text-[127px] items-center flex-col relative z-10 text-color-text-primary font-titleFont">
          Contact
        </h1>
        <div>
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-20 justify-between mt-10 border-[2px] border-green-800 rounded-3xl p-12">
            <form className="flex flex-col gap-2">
              <div class="relative z-0 mb-6 group">
                <input
                  name="floating_password"
                  id="floating_password"
                  class="block pt-2.5 pb-1.5 px-0 w-full text-[20px] font-titleFont text-color-text-primary bg-transparent border-0 border-b-2 border-green-200 appearance-none dark:text-color-text-primary dark:border-green-800 dark:focus:text-color-text-primary focus:outline-none focus:ring-0 focus:text-color-text-primary peer"
                  placeholder=" "
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <label
                  for="floating_password"
                  class="peer-focus:font-medium text-font-h3 absolute opacity-[0.6] text-sm text-color-text-secondary dark:text-color-text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-color-text-primary peer-focus:dark:text-color-text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Your name
                </label>
              </div>
              <div class="relative z-0 mb-6 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  class="block pt-2.5 pb-1.5 px-0 w-full text-[20px] font-titleFont text-color-text-primary bg-transparent border-0 border-b-2 appearance-none dark:text-color-text-primary dark:border-green-800 dark:focus:text-color-text-primary focus:outline-none focus:ring-0 focus:text-color-text-primary peer"
                  placeholder=" "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label
                  for="floating_email"
                  class="peer-focus:font-medium text-font-h3 absolute opacity-[0.6] text-sm text-color-text-secondary dark:text-color-text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-color-text-primary peer-focus:dark:text-color-text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email address
                </label>
              </div>

              <div class="relative z-0 mb-6 group">
                <textarea
                  ref={textareaRef}
                  name="repeat_password"
                  id="floating_repeat_password"
                  rows={1}
                  placeholder=""
                  value={text}
                  onChange={handleTextChange}
                  style={{ maxHeight: "130px" }}
                  class={`block pt-2.5 pb-0.5 ${
                    text && "mt-[16px]"
                  } px-0 w-full text-[20px] font-titleFont text-color-text-primary bg-transparent border-0 border-b-2 appearance-none dark:text-color-text-primary dark:border-green-800 dark:focus:text-color-text-primary focus:outline-none focus:ring-0 focus:text-color-text-primary peer`}
                />
                <label
                  for="floating_repeat_password"
                  class="peer-focus:font-medium text-font-h3 absolute opacity-[0.6] text-sm text-color-text-secondary dark:text-color-text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-color-text-primary peer-focus:dark:text-color-text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Your message
                </label>
              </div>
              <button
                type="submit"
                className="text-white bg-green-800 w-sm hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-green-800 dark:hover:bg-green-700 dark:focus:ring-blue-800"
                style={{ width: "120px" }}
              >
                Submit
              </button>
            </form>

            <div className="flex flex-col justify-start gap-6">
              <div className="flex flex-col items-center gap-2">
                <h2 className={`${styles.secondaryHeading} text-[24px]`}>
                  My email
                </h2>
                <p className={`${styles.primaryContent} font-[500]`}>
                  yashjindal069@gmail.com
                </p>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <h2 className={`${styles.secondaryHeading} text-[24px]`}>
                  Contact
                </h2>
                <p className={`${styles.primaryContent} font-[500]`}>
                  +91 6377088127
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
