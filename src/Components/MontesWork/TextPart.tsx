import { Messages } from '../../Consts/Constants';
import { NavButton } from './Navbar/NavButton';
const stylesNavItemsHeader = "list-none w-[170px] cursor-pointer text-center text-xl text-white bg-primary rounded-3xl py-3 hover:bg-hover transition-[background-color] duration-300"

export const TextPart = () => {
  return (
    <main className='flex flex-col w-2/4 justify-evenly px-8 items-center'>
      <section className='flex flex-col gap-8 items-center justify-between'>
        <h1 className=' text-6xl mr-44'>Bienvenido a</h1>
        <h2 className='text-8xl ml-44 font-[900] font-dancing-script'>MyBuss</h2>
      </section>
        <p className='max-w-xl text-2xl'>{Messages.principal}</p>
        <NavButton path='' content='CONOCE MAS' className={stylesNavItemsHeader} />
    </main>
  )
}
