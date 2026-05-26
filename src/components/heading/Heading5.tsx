import { IHeadingProps } from "@/types/global.types"

const Heading5 = ({ title, className="" }: IHeadingProps) => {
   return <h5 className={`text-md select-none ${className}`}>{title}</h5>;
}

export default Heading5;