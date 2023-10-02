import { Images } from '../../Consts/Constants';
import { Navbar } from './Navbar/Navbar';
export const Header = () => {
  return (
    <header className="bg-modern-gray z-20 border-b-[#aa4a4a] border-b-[3px]  flex justify-between px-[4%] h-[8%] items-center">
      <img src={Images.logo} alt="" className="h-4/6" />
      <Navbar />
    </header>
  );
};
