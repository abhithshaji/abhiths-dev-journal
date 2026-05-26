import { IHeadingProps } from "@/types/global.types"

const Heading3 = ({ title, className="" }: IHeadingProps) => {
   return <h3 className={`font-semibold text-2xl mb-2 select-none ${className}`}>{title}</h3>;
}

export default Heading3