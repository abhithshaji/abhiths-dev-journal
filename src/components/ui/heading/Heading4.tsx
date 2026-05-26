import { IHeadingProps } from "@/types/global.types"

const Heading4 = ({ title, className="" }: IHeadingProps) => {
   return <h4 className={`text-lg select-none ${className}`}>{title}</h4>;
}

export default Heading4;