import { Images } from '../../../Consts/Constants'
import {changeRegister, returnRegister} from '../../../Consts/Events'
import { Navbar } from '../Navbar/Navbar';
import { EventButton } from '../EventButton';
import { useEffect, useState } from 'react';
import { findElement, toDisplay, replaceClass, toDisplayNone, toInvisible, toVisible, } from '../../../Consts/Functions';

const stylesNavItemsHeader = "opacity-[1] block list-none w-[100%] font-[600] hover:scale-[110%]  font-lato cursor-pointer text-center text-sm transition-all text-white bg-teal-green rounded-[7px] py-2 hover:bg-deep-blue ease-in-out  duration-300"
export const Header = () => {
  const ulContainer = findElement(".ulContainer")
  const regCont = findElement(".regCont")
  const logButton = findElement(".logButton")
  const regButton = findElement(".regButton")
  const FullImagePart = findElement(".FullImagePart")
  const imagePart = findElement(".imagePart")
  const login = findElement(".loginPart")
  const text = findElement(".textPart")

  const [isLogin, setisLogin] = useState(false)
  const [isRegister, setisRegister] = useState(false)
  const [firstButtonText, setfirstButtonText] = useState("INICIAR SESION")

  const hideRegButton = () => {
    toInvisible(regButton)
    replaceClass(regCont, "w-[40%]", "w-[0%]");
    replaceClass(ulContainer, "justify-between", "justify-end")
    setTimeout(() => {
      toDisplayNone([regCont, regButton])
    }, 700)
  }

  const showRegButton = () => {
    toInvisible([logButton, regButton])
    setTimeout(() => {
      replaceClass(ulContainer, "justify-end", "justify-between");
      replaceClass(regCont, "w-[0%]", "w-[40%]");
      toDisplay([regButton, regCont], "block")
    }, 300)
    setTimeout(() => {
      toVisible([logButton, regButton])
    }, 400)
  }

  const hideLogin = () => {

    toInvisible(login)
    setfirstButtonText("INICIAR SESION")
    setisRegister(false)
    setTimeout(() => {
      toDisplayNone(login)
      toDisplay(text, "flex")
    }, 300)
    setTimeout(() => toVisible(text), 400)
  }

  const hideText = () => {
    toInvisible(text)
    setfirstButtonText("VOLVER")
    setisRegister(false)
    setTimeout(() => {
      toDisplay(login, "flex")
      toDisplayNone(text)
    }, 300)
    setTimeout(() => toVisible(login), 400)
  }

  const hideAside = () => {
    toInvisible([imagePart, login, text])
    toDisplay(FullImagePart, "block")
    setfirstButtonText("VOLVER")
    setTimeout(() => toVisible(FullImagePart), 300)
    setTimeout(() => {
      replaceClass(FullImagePart, "w-2/4", "w-full")
      toDisplayNone([imagePart, login, text])
    }, 350)
    changeRegister()
  }

  const showAside = () => {
    toInvisible(FullImagePart)
    setTimeout(() => {
      toDisplayNone(FullImagePart)
      toDisplay(imagePart, 'block')
      toVisible(imagePart)
      replaceClass(FullImagePart, "w-full", "w-2/4")
    }, 350)
    hideLogin()
    returnRegister()
  }

  useEffect(() => {
    isLogin ? hideText() : hideLogin()
  }, [isLogin])


  useEffect(() => {
    isRegister ? hideAside() : showAside()
    isRegister ? hideRegButton() : showRegButton()
  }, [isRegister])


  return (
    <header className='bg-intense-red flex justify-between border-b-[1px] border-black flex-grow items-center px-10'>
      <img src={Images.logo} alt="" className='h-[70px] py-2' />
      <Navbar>
        <section className='w-[40%] logCont'>
          <EventButton content={firstButtonText} event={() => setisLogin(!isLogin)} className={stylesNavItemsHeader + " logButton"} />
        </section>
        <section className='w-[40%] regCont block'>
          <EventButton content='REGISTRATE' event={() => setisRegister(!isRegister)} className={stylesNavItemsHeader + " regButton"} />
        </section>
      </Navbar>
    </header>

  )
}
