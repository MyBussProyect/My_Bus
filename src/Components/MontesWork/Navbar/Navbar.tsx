import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

export const Navbar = ({children}:Props) => {
  return (
    <nav className="w-1/4">
        <ul className="flex w-full justify-evenly">
            {children}
        </ul>
    </nav>
  )
}
