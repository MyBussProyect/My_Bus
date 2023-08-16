import { NavLink } from 'react-router-dom';
interface Props {
    content: string,
    path: string
}
export const NavButton = ({ content, path }: Props) => {
    return (
        <li className='list-none w-40 text-center text-sm text-white bg-primary rounded-2xl py-2 hover:bg-hover'><NavLink to={path}>{content}</NavLink></li>
    )
}   
