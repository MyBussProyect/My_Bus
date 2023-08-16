import { Images } from "../../Consts/Constants"
import { Navbar } from "./Navbar"
import { Navlink } from './Navlink';



export const Header = () => {   
  


  return (
    <header className={`bg-primary items-center  px-16 py-3 flex w-screen justify-between font-semibold`}>
        <img src={Images.logo} className="w-32" alt="" />
        <Navbar UlClassName="flex w-full justify-between" NavClassName=" w-1/4">
            <Navlink content="INICIAR SESIÓN"/>
            <Navlink content="REGISTRO"/>
        </Navbar>
    </header>
  )
}
