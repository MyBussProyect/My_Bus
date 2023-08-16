
import { Images } from '../../Consts/Constants'
import { Navbar } from './Navbar/Navbar';
import { NavButton } from './Navbar/NavButton';
export const Header = () => {
  return (
    <header className='bg-primary flex justify-between items-center px-8'>
        <img src={Images.logo} alt="" className='w-[120px] py-5' />
        <Navbar>
            <NavButton content='INICIAR SESIÓN' path='/login'/>
            <NavButton content='REGISTRATE' path='/'/>
        </Navbar>
    </header>

  )
}
