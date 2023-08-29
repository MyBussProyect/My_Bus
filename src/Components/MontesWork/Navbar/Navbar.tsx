import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

export const Navbar = ({children}:Props) => {
  return (
    <nav className="w-1/4">
        <ul className="ulContainer flex w-full justify-between opacity-[1] transition-opacity duration-700 ease-in-out">
            {children}
        </ul>
    </nav>
  )
}
