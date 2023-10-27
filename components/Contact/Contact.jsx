const Contact = () => {
  return (
    <div className="flex contain items-center ">
      <div className="mt-[100px] flex flex-col justify-between">
        <h1 className="flex justify-center text-[50px] sm:text-[127px] items-center flex-col relative z-10 text-color-text-primary font-titleFont">
          Contact
        </h1>
        <div>
          <div className="flex justify-between items-center p-[24px] border-[2px] border-green-800 rounded-2xl">
            <form className="flex">
              <div className="flex flex-col">
                <input placeholder="Your name" />
                <input placeholder="Your email" />
                <input placeholder="Your message" />
              </div>
            </form>
            <div className="flex flex-col"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
