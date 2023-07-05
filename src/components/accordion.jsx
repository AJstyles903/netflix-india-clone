import React, { useState } from "react";
import { AiOutlinePlus as Plus } from "react-icons/ai";

const Accordion = ({ question, answer,answer2 }) => {
    const [Show, setShow] = useState(false);

    return (
        <>
        <li className="appearance-none mb-2">
            <h3 className="text-white text-[18px] md:text-[24px] font-normal font-regular duration-200">
            <button
                type="button"
                onClick={() => setShow(!Show)}
                className="flex items-center justify-between w-full p-[24px] bg-[#2d2d2d] hover:bg-[#4e4e4e] duration-300">
                <h1>{question}</h1>
                <Plus
                className={`${
                    Show ? "rotate-45" : "rotate-0"
                } duration-200 h-[36px] w-[36px]`}
                />
            </button>
            <div
                className={`${
                Show ? "py-[24px] visited:" : "collapse py-[0px]"
                } w-full px-[24px] bg-[#2d2d2d] mt-[1px] transition-all duration-200 delay-0 ease-out overflow-hidden`}
            >
                {Show && <p className="">{answer}</p>}
                {answer2 && Show && <br/> }
                {answer2 && Show && <p className="">{answer2}</p> }
            </div>
            </h3>
        </li>
        </>
    );
};

export default Accordion;
