import { H1Icon } from "@heroicons/react/24/outline";
import React from "react";
type Props = {
  title_1: string;
  title_2: string;
};
const SectionHeading = ({ title_1, title_2 }: Props) => {
  return (
    <div className="text-center mb-16 py-14">
      <p className=" text-1xl text-yellow-600 font-medium mb-4">{title_1} </p>
      <h1 className="text-3xl text-gray-400 font-bold  ">{title_2}</h1>
    </div>
  );
};

export default SectionHeading;
