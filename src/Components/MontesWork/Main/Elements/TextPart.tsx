import { IconsSource, Messages } from '../../../../Consts/Constants';
import { Icons } from '../../Icons';
import { useState } from 'react';
import { NavButton } from '../../Navbar/NavButton';

const stylesNavItemsTextPart = "list-none w-[200px] font-[600] hover:scale-[120%]  font-lato cursor-pointer text-center text-ms text-white bg-teal-green rounded-[7px] py-3 hover:bg-deep-blue transition-all  duration-300"

const iconClassName = "bg-[none] p-2 hover:drop-shadow-xl block iconFromBar h-[80px] rounded-ms bg-white hover:scale-[120%] transition-all  duration-300"
const messageClass = "messageTop my-7 transition-all duration-300 text-[20px] text-center  font-roboto opacity-[0]"
const secondMessageClass = "absolute top-0 my-5 transition-all duration-300 text-[30px] text-center font-roboto opacity-[1]"
export const TextPart = () => {
  const [Message, setMessage] = useState("servicios")
  const [MC, setMC] = useState(messageClass)
  const [MC2, setMC2] = useState(secondMessageClass)
  const handleMessageOn = (message: string) => {
    setMessage(message)
    setMC(MC.replace("opacity-[0]", "opacity-[1]"))
    setMC2(MC2.replace("opacity-[1]", "opacity-[0]"))
  }
  const handleMessageOff = () => {
    setMC(messageClass)
    setMC2(secondMessageClass)
  }


  return (
    <aside className='transition-all duration-300 textPart absolute right-0 h-full flex  flex-col w-2/4 justify-evenly px-20 py-3 items-center opacity-[1]'>
      <section className='border-[2px] border-[#008080] shadow-md shadow-[#008080] p-7 box-border rounded-xl'>
        <p className='font-[650] textPrinc font-roboto w-full h-full text-black'>{Messages.principal} </p>
      </section>
      <section className='relative flex flex-col items-center w-full mx-8 justify-around'>
        <h4 className={MC}>{Message}</h4>
        <p className={MC2}>SERVICIOS</p>
        <div className='flex items-baseline w-full mx-8 justify-around'>
          <Icons
            src={IconsSource.ruta}
            className={iconClassName}
            onMouseOver={() => handleMessageOn(Messages.ruta)}
            onMouseLeave={() => handleMessageOff()} />

          <Icons
            src={IconsSource.contacto}
            className={iconClassName}
            onMouseOver={() => handleMessageOn(Messages.contacto)}
            onMouseLeave={() => handleMessageOff()} />

          <Icons
            src={IconsSource.redes}
            className={iconClassName}
            onMouseOver={() => handleMessageOn(Messages.redes)}
            onMouseLeave={() => handleMessageOff()} />

          <Icons
            src={IconsSource.descargar}
            className={iconClassName}
            onMouseOver={() => handleMessageOn(Messages.aplicacion)}
            onMouseLeave={() => handleMessageOff()} />
        </div>
      </section>
      
      <NavButton path='/' content='CONOCE MAS' className={stylesNavItemsTextPart} />
    </aside>
  )
}
