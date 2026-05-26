"use client";
import { useState } from "react";
import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";
import { Heading4, Heading5 } from "@/components/heading";
import {Input,Select} from "@/components/ui";

const LogsEntry = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="border rounded-lg">
      <div className="flex items-center ml-2">
        {isOpen ? (
          <ChevronDown className="mr-2" onClick={handleToggle} />
        ) : (
          <ChevronRight className="mr-2" onClick={handleToggle} />
        )}
        <Heading4 title="DSA" />
      </div>

      <div className="flex ml-10">
        <div className="mr-4">
          <Heading5 title="Problem Name" />
          <Input
            type="text"
            id="dsa-problem-name"
            name="dsa-problem-name"
            onChange={function () {}}
          />
        </div>
        <div>
          <Heading5 title="Series" />
          <Select/>
        </div>
      </div>
    </section>
  );
};

export default LogsEntry;
