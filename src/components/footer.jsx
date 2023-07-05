import React from "react";
import lang from "../svgs/lang.svg";
import downArrow from "../svgs/DArrow.svg";

export default function footer() {
  return (
    <>
      <footer className="bg-black">
        <div className="mx-[32px] xl:mx-[155px] py-[72px] text-[#b0b0b0] font-regular">
          <div>
            Questions? Call <span className="underline">000-800-919-1694</span>
          </div>
          <div className="">
            <ul className="my-4 py-2 grid gap-3 min-w-[18.375rem] grid-cols-3 sm:grid-cols-4 md:grid-cols-3 leading-6">
              <li>
                <span className="underline">FAQ</span>
              </li>
              <li>
                <span className="underline">Help Centre</span>
              </li>
              <li>
                <span className="underline">Account</span>
              </li>
              <li>
                <span className="underline">Media Centre</span>
              </li>
              <li>
                <span className="underline">Investor Relations</span>
              </li>
              <li>
                <span className="underline">Jobs</span>
              </li>
              <li>
                <span className="underline">Ways to Watch</span>
              </li>
              <li>
                <span className="underline">Terms of Use</span>
              </li>
              <li>
                <span className="underline">Privacy</span>
              </li>
              <li>
                <span className="underline">Cookie Preferences</span>
              </li>
              <li>
                <span className="underline">Corporate Information</span>
              </li>
              <li>
                <span className="underline">Contact Us</span>
              </li>
              <li>
                <span className="underline">Speed Test</span>
              </li>
              <li>
                <span className="underline">Legal Notices</span>
              </li>
              <li>
                <span className="underline">Only on Netflix</span>
              </li>
            </ul>
          </div>
          <div className="flex py-2">
            <div className="relative">
              <select className="appearance-none text-[16px] text-white px-9 py-1 font-regular backdrop-blur-sm border border-[#4d4a49] bg-[rgba(36,35,35,0.6)] rounded-[4px]">
                <option value="English">English</option>
                <option value="हिन्दी">हिन्दी</option>
              </select>
              <div className="absolute top-[10px] right-0 flex justify-between w-[126px] px-2">
                <img src={lang} alt="lang" />
                <img src={downArrow} alt="DA" />
              </div>
            </div>
          </div>
          <div className="py-4 text-[14px]">
            Netflix India
          </div>
        </div>
      </footer>
    </>
  );
}
