import { IHeadingProps } from "@/types/global.types"

const Heading2 = ({ title, className="" }: IHeadingProps) => {
  return <h2 className={`font-bold text-3xl ${className}`}>{title}</h2>;
}

export default Heading2