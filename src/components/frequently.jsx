import React, { useState } from "react";
import Border from "./border";
import Accordion from "./accordion";
import { details } from "./api";

export default function Frequently() {
  const [Data, setData] = useState(details);
  function changeButtonColor(button) {
    button.style.backgroundColor = "#99161d";
  }
  const handleClick = (event) => {
    changeButtonColor(event.target);
  };
  return (
    <>
        <div className="bg-black">
            <div className="xl:mx-[155px] mx-[32px] py-[72px] text-white">
            <h1 className="font-bold font-black text-[32px] md:text-[48px] text-center">
                Frequently Asked Questions
            </h1>
            <ul className="py-[24px]">
                {Data.map((currentElement) => {
                const { id } = currentElement;
                return <Accordion key={id} {...currentElement} />;
                })}
            </ul>
            <div className="mt-[16px]">
              <p className="text-[18px] md:text-[20px] font-regular font-normal text-center">
                Ready to watch? Enter your email to create or restart your membership.
              </p>
              <form className="flex w-[75%] mx-auto items-center justify-center mt-5 text-center">
                <div className="gap-3">
                  {/* <label className="text-[16px]" htmlFor="email">
                    Email address
                  </label> */}
                  <input
                    className="text-[16px] md:text-[24px] font-regular rounded-md px-[24px] py-[12px] border border-[#4d4a49] bg-[rgba(36,35,35,0.6)] w-full"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email address"
                  />
                <button
                  type="button"
                  id="getstarted"
                  onClick={handleClick}
                  className="text-[18px] md:text-[24px] bg-[#e50914] font-medium rounded-md hover:bg-[#c11119] duration-300 px-[24px] py-[12px] mt-3"
                >
                  Get Started {">"}
                </button>
                </div>
              </form>
            </div>
            </div>
        </div>
        <Border/>
    </>
  );
}
