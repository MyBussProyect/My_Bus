
import { Images } from '../../Consts/Constants'
import { Navbar } from './Navbar/Navbar';
import { NavButton } from './Navbar/NavButton';

const stylesNavItemsHeader = "list-none w-[120px] cursor-pointer text-center text-sm text-white bg-primary rounded-2xl py-2 hover:bg-hover transition-[background-color] duration-300"
export const Header = () => {
  return (
    <header className='bg-primary flex justify-between items-center px-8'>
        <img src={Images.logo} alt="" className='w-[120px] py-5' />
        <Navbar>
            <NavButton content='INICIAR SESIÓN' path='/login' className={stylesNavItemsHeader}/>
            <NavButton content='REGISTRATE' path='/' className={stylesNavItemsHeader}/>
        </Navbar>
    </header>

  )
}
