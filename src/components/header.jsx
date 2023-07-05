import React from "react";
import logo from "../svgs/logo.svg";
import lang from "../svgs/lang.svg";
import downArrow from "../svgs/DArrow.svg";

export default function header() {
  function changeButtonColor(button) {
    button.style.backgroundColor = "#99161d";
  }
  const handleClick = (event) => {
    changeButtonColor(event.target);
  };

  return (
    <>
      <header className="bg-[url(./assets/NETFLIX-IN-en.jpg)] w-full h-[75vh] md:h-[90vh] relative">
        <div className="bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.8)] w-full h-full">
          <div className="xl:mx-[155px] mx-auto">
          <nav className="flex justify-between items-center p-6">
            <div>
              <img
                typeof="svg"
                className="w-[89px] h-[24px] md:w-[148px] md:h-[40px]"
                src={logo}
                alt="logo"
              />
            </div>
            <div className="flex items-center">
              <div className="flex">
                <div className="relative">
                <select className="appearance-none font-regular text-[16px] text-transparent sm:text-white px-2 sm:px-9 py-1 backdrop-blur-sm border border-[#4d4a49] bg-[rgba(36,35,35,0.6)] rounded-[4px]">
                  <option value="English">English</option>
                  <option value="हिन्दी">हिन्दी</option>
                </select>
                <div className="absolute top-[10px] right-0 flex justify-between w-[65px] sm:w-[126px] px-2">
                  <img src={lang} alt="lang" />
                  <img src={downArrow} alt="DA" />
                </div>
                </div>
              </div>
              <button
                type="button"
                id="signin"
                onClick={handleClick}
                className="text-sm text-white bg-[#e50914] font-medium hover:bg-[#c11119] duration-300 px-[18px] py-2 rounded-[4px] ml-3 md:ml-6"
              >
                Sign In
              </button>
            </div>
          </nav>
          <div className="text-white w-full text-center px-[32px] my-[95px] md:my-[190px]">
            <h1 className="text-[32px] md:text-[48px] font-bold font-black">
              Unlimited movies, TV shows and more
            </h1>
            <h3 className="text-[18px] md:text-[24px] font-regular font-normal mt-[8px]">
              Watch anywhere. Cancel anytime.
            </h3>
            <div className="mt-[16px]">
              <p className="text-[18px] md:text-[20px] font-regular font-normal">
                Ready to watch? Enter your email to create or restart your membership.
              </p>
              <form className="flex w-[75%] mx-auto items-center justify-center mt-5">
                <div className="">
                  {/* <label className="text-[16px]" htmlFor="email">
                    Email address
                  </label> */}
                  <input
                    className="w-full text-[16px] md:text-[24px] font-regular rounded-md px-[24px] py-[12px] border border-[#4d4a49] bg-[rgba(36,35,35,0.6)]"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email address"
                  />
                <button
                  type="button"
                  id="getstarted"
                  onClick={handleClick}
                  className="text-[18px] md:text-[24px] mt-3 bg-[#e50914] font-medium rounded-md hover:bg-[#c11119] duration-300 px-[24px] py-[12px] ml-3"
                >
                  Get Started {">"}
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
      </header>
    </>
  );
}
