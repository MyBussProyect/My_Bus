import { Messages } from '../../../Consts/Constants';
import IconList from './IconList';
import NavButton from '../Navbar/NavButton';

export const TextPart = () => {
  return (
    <aside className="absolute  right-0 h-full flex  flex-col w-2/4 justify-evenly px-[4%] py-3 items-center">
      <section className="border-[2px] border-[#aa4a4a] p-7 rounded-xl shadow-[0_0_15px_#000]">
        <p className="font-[650] max-w-[50ch] w-full h-full text-black">
          {Messages.PRINCIPAL}
        </p>
      </section>
      <section className="relative flex flex-col items-center w-full mx-8 justify-around">
        <p className="text-[3rem] font-[900]">SERVICIOS</p>
      </section>
      <IconList />
      <NavButton
        path="/"
        content="CONOCE MAS"
        className="list-none w-[200px] font-[600] hover:scale-[110%] cursor-pointer text-center text-ms text-white bg-teal-green rounded-[7px] py-3 hover:bg-deep-blue transition-[color_scale] ease-in duration-100"
      />
    </aside>
  );
};
