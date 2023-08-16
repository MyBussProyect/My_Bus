
interface Props {
    content:string
}

export const Navlink = ({content}:Props) => {
  return (
    <li className="w-32 hover:bg-hover text-center py-2 rounded-3xl  "><a href="#" className="text-white text-sm">{content}</a></li>
  )
}
