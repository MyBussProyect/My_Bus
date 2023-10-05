import { Input } from './../Input';
import { IconsSource } from './../../../Consts/Constants';
import { FormEvent, FormEventHandler, useRef } from 'react';
import Icons from './../Icons';
import useFetch from '../../../Hooks/useFetch';

const styles = {
  input:
    'w-full py-2 rounded-md text-[15px] text-black border border-solid px-4 border-black ',
  label: 'text-[15px] text-black',
  allInput: 'flex flex-col justify-between  w-full',
};

export const LoginPart = () => {
  const handleRegister = (event: FormEvent<any>): FormEventHandler => {
    event.preventDefault();
    useFetch({
      EndPoint: 'Autorizar/Usuario',
      CallBack: (data, err) => {
        if (err) {
          console.log(err.response.data);
          return;
        }
        console.log(data);
      },
      Body: {
        Documento: (Documento.current! as HTMLInputElement).value,
        contraseña: (Contraseña.current! as HTMLInputElement).value,
      },
      method: 'POST',
    });
    return {} as FormEventHandler;
  };
  const Documento = useRef(null);
  const Contraseña = useRef(null);
  return (
    <aside className="transition-all flex duration-300 absolute right-0 h-5/6  flex-col w-2/4 justify-evenly px-20 py-3 items-center">
      <form
        onSubmit={handleRegister}
        className="w-full h-full flex flex-col items-center justify-between py-10 px-20 border-teal-green rounded-md  shadow-[0_0_15px_#000]  max-h-[700px] max-w-[600px] bg-no-repeat bg-cover bg-register "
      >
        <h2 className="text-[35px] h-[15%] font-bold text-black">
          Iniciar Sesión
        </h2>
        <form className="flex flex-col overflow-y-scroll justify-around h-[40%] w-[100%]">
          <Input
            inputRef={Documento}
            label="Documento"
            type="text"
            labelStyle={styles.label}
            inputStyle={styles.input}
            className={styles.allInput}
          />
          <Input
            inputRef={Contraseña}
            label="Contraseña"
            type="password"
            labelStyle={styles.label}
            inputStyle={styles.input}
            className={styles.allInput}
          />
        </form>
        <button className="hover:scale-[110%] transition-[scale_background-color] duration-300 text-roboco font-[700] text-center text-[15px] w-full text-white bg-teal-green rounded-[7px] py-3 hover:bg-deep-blue">
          Ingresar
        </button>
        <h2 className=" h-[5%] text-lg">or</h2>
        <section className="flex justify-evenly w-full h-[7%]">
          <Icons src={IconsSource.FACEBOOK} className="h-full" />
          <Icons src={IconsSource.GOOGLE} className=" h-full" />
        </section>
      </form>
    </aside>
  );
};
