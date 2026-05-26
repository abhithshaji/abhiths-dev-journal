import { ReactNode } from "react"

const PageWrapper = ({children}:{children:ReactNode}) => {
  return (
    <section className="px-10 py-5">{children}</section>
  )
}

export default PageWrapper