import { FormCard } from '../../FormCard'
import { Input } from '../../Input';
import { EventButton } from '../../EventButton';
import { Icons } from '../../Icons';
import { IconsSource } from '../../../../Consts/Constants';
import { useRef } from 'react';
import axios from 'axios';

const styles = {
  input: "w-full py-2 rounded-md text-[15px] font-roboto text-black border border-solid px-4 border-black ",
  label: "text-[15px] font-roboto text-black",
  button: "hover:scale-[110%] font-lato transition-all duration-300 text-roboco font-[700] text-center text-[15px] w-full text-white bg-teal-green rounded-[7px] py-3 hover:bg-deep-blue",
  card: "w-full h-full flex flex-col items-center justify-between py-10 px-20 border-teal-green rounded-md  shadow-xl shadow-black  max-h-[700px] max-w-[600px] bg-no-repeat bg-cover bg-register ",
  allInput: "flex flex-col justify-between  w-full"
}

interface Register {
  Documento: string | null,
  contraseña: string | null
}


const AuthAnUser = async ({ Documento, contraseña }: Register) => {
  let token:string = "";
   await axios.post("http://mybuss.somee.com/Auth/User", {
    Documento: Documento,
    contraseña: contraseña
  }).then(res => token =res.data.token)
  return token
}

export const LoginPart = () => {
  const handleRegister = async () => {
    alert(await AuthAnUser({
      Documento: Documento.current?.value,
      contraseña: Contraseña.current?.value
    })
    )
  }
  const Documento = useRef(null)
  const Contraseña = useRef(null)
  return (
    <aside className="transition-all  duration-300 loginPart absolute top-0 right-0 w-2/4 h-full py-12 px-20 hidden items-center justify-center opacity-[0]">
      <FormCard className={styles.card}>
        <h2 className='text-[35px] h-[15%]  font-montserrat font-bold text-black'>Iniciar Sesión</h2>
        <form className='flex flex-col overflow-y-scroll justify-around h-[40%] w-[100%]'>
          <Input inputRef={Documento} label='Documento' type='text' labelStyle={styles.label} inputStyle={styles.input + " emailInput"} className={styles.allInput} />
          <Input inputRef={Contraseña} label='Contraseña' type='password' labelStyle={styles.label} inputStyle={styles.input + " passwordInput"} className={styles.allInput} />
        </form>
        <EventButton content='Ingresar' event={handleRegister} className={styles.button} />
        <h2 className=' h-[5%] text-lg font-bold '>or</h2>
        <section className='flex justify-evenly w-full h-[10%]'>
          <Icons src={IconsSource.facebook} className='h-full' />
          <Icons src={IconsSource.google} className=' h-full' />
        </section>
      </FormCard>
    </aside>
  )
}
