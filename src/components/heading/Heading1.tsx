import { IHeadingProps } from "@/types/global.types";

const Heading1 = ({ title, className="" }: IHeadingProps) => {
  return <h1 className={`font-bold text-4xl ${className}`}>{title}</h1>;
};

export default Heading1;
