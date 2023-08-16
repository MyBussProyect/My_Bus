import  { ReactNode } from 'react'

interface Props {
    children: ReactNode,
    NavClassName?: string,
    UlClassName?: string
}

export const Navbar = ({ children, NavClassName = "", UlClassName = "" }: Props) => {
    return (
        <nav className={NavClassName}>
            <ul className={UlClassName}>
                {children}
            </ul>
        </nav>
    )
}
