import { Images } from '../../../Consts/Constants'
import { Navbar } from '../Navbar/Navbar';
import { NavButton } from '../Navbar/NavButton';
import { EventButton } from '../EventButton';
import { useEffect, useState } from 'react';

const stylesNavItemsHeader = "list-none w-[130px] font-[600] hover:scale-[110%]  font-lato cursor-pointer text-center text-sm text-white bg-teal-green rounded-[7px] py-2 hover:bg-deep-blue transition-all  duration-300"
export const Header = () => {
  const login = document.querySelector(".loginPart")
  const text = document.querySelector(".textPart")
  const [isLogin, setIsLogin] = useState(false)
  const [firstButtonText , setFirstButtonText] = useState("INICIAR SESIÓN")
  const hideLogin = () => {
    setTimeout(() => text?.classList.replace("hidden", "flex"), 300)
    setTimeout(() => login?.classList.replace("flex","hidden"), 300)
    setTimeout(() => text?.classList.replace("opacity-[0]", "opacity-[1]"), 400)
    setTimeout(() => login?.classList.replace("opacity-[1]", "opacity-[0]"), 0)
  }
  const hideText = () => {
    setTimeout(() => login?.classList.replace("hidden", "flex"), 300)
    setTimeout(() => text?.classList.replace("flex","hidden"), 300)
    setTimeout(() => login?.classList.replace("opacity-[0]", "opacity-[1]"), 400)
    setTimeout(() => text?.classList.replace("opacity-[1]","opacity-[0]"), 0)
  }

  useEffect(()=> {  
    isLogin? hideText(): hideLogin()
    setFirstButtonText(isLogin? "VOLVER":"INICIAR SESIÓN")
},[isLogin])

  return (
    <header className='bg-intense-red flex justify-between border-b-[1px] border-black flex-grow items-center px-8'>
        <img src={Images.logo} alt="" className='w-[120px] py-3' />
        <Navbar>
            <EventButton content={firstButtonText} event={() => setIsLogin(!isLogin)} className={stylesNavItemsHeader}/>
            <NavButton content='REGISTRATE' path='/' className={stylesNavItemsHeader}/>
        </Navbar>
    </header>

  )
}
