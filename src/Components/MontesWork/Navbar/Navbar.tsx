import { CSSProperties, useContext } from 'react';
import RegisterContext from '../../../Contexts/RegisterContext';
import LoginContext from '../../../Contexts/LoginContext';
export const Navbar = () => {
  const { isRegister, setIsRegister } = useContext(RegisterContext);
  const { isLogin, setIsLogin } = useContext(LoginContext);

  const outStyles: CSSProperties = {
    opacity: 0,
    width: 0,
    color: 'transparent',
  };

  return (
    <nav className="w-1/4 h-3/6 max-h-12 max-w-6xl z-20">
      <ul className="flex w-full h-full justify-between opacity-[1] transition-opacity duration-700 ease-in-out"
      style={(isRegister || isLogin)?{justifyContent: 'end'}: {}}
      >
        <button
          onClick={() =>
            isRegister ? setIsRegister(!isRegister) : setIsLogin(!isLogin)
          }
          className="opacity-[1] block list-none w-[40%] font-[600] hover:scale-[110%] cursor-pointer text-center text-sm transition-[background-color_scale] text-white bg-teal-green rounded-[7px] h-full hover:bg-deep-blue ease-in-out duration-300"
        >
          {isRegister || isLogin ? 'Volver' : 'Iniciar Sesión'}
        </button>
        <button
          onClick={() => setIsRegister(!isRegister)}
          style={(isRegister || isLogin) ? outStyles : {} }
          className="list-none w-[40%] font-[600] hover:scale-[110%] cursor-pointer text-center text-sm transition-[background-color_scale] text-white bg-teal-green rounded-[7px] h-full hover:bg-deep-blue ease-in-out duration-300"
        >
          Registrate
        </button>
      </ul>
    </nav>
  );
};
