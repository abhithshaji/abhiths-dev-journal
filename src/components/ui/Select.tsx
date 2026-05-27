"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface ISelectProps{
  options : string[];
}


export default function Select({options}:ISelectProps) {
  const [selecteedOption, setSelectedOption] = useState("");
  const [openDropDown, setOpenDropDown] = useState(false);

  const toggleDropDown = () => {
    setOpenDropDown(!openDropDown);
  };

  const handleOptionSelection = (option: string) => {
    toggleDropDown();
    setSelectedOption(option);
  };

  return (
    <section className="select-none">
      <div
        className="border rounded-lg px-4 py-1 w-28 cursor-pointer flex items-center justify-between"
        onClick={toggleDropDown}
      >
        <p >{selecteedOption}</p>
        <ChevronDown className="ml-2 " />
      </div>
      {openDropDown && (
        <div className="text-center rounded-lg border mt-1 overflow-hidden">
          {options.map((option, index) => {
            return (
              <p
                key={option + index}
                className="cursor-pointer hover:bg-foreground hover:text-background "
                onClick={() => handleOptionSelection(option)}
              >
                {option}
              </p>
            );
          })}
        </div>
      )}
    </section>
  );
}
