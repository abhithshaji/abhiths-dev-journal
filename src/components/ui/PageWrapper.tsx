import { ReactNode } from "react"

const PageWrapper = ({children}:{children:ReactNode}) => {
  return (
    <div className="px-10 py-5">{children}</div>
  )
}

export default PageWrapper