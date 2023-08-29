import React from 'react'
import { FormCard } from '../../FormCard'
import { Input } from '../../Input';
import { EventButton } from '../../EventButton';
import { Icons } from '../../Icons';
import { IconsSource } from '../../../../Consts/Constants';
const styles = {
  input: "w-full py-2 rounded-md text-[15px] font-roboto text-black border border-solid px-4 border-black ",
  label: "text-[15px] font-roboto text-black",
  button: "hover:scale-[110%] font-lato transition-all duration-300 text-roboco font-[700] text-center text-[15px] w-full text-white bg-teal-green rounded-[7px] py-3 hover:bg-deep-blue",
  card: "w-full h-full flex flex-col items-center justify-between py-10 px-20 border-teal-green rounded-md  shadow-xl shadow-black  max-h-[700px] max-w-[600px] bg-no-repeat bg-cover bg-register ",
  allInput: "flex flex-col justify-between  w-full"
}

export const LoginPart = () => {
  return (
    <aside className="transition-all  duration-300 loginPart absolute top-0 right-0 w-2/4 h-full py-12 px-20 hidden items-center justify-center opacity-[0]">
      <FormCard className={styles.card}>
        <h2 className='text-[35px] h-[15%]  font-montserrat font-bold text-black'>Iniciar Sesión</h2>
        <form className='flex flex-col overflow-y-scroll justify-around h-[40%] w-[100%]'>
          <Input label='Email' type='email' labelStyle={styles.label} inputStyle={styles.input} className={styles.allInput} />
          <Input label='Contraseña' type='password' labelStyle={styles.label} inputStyle={styles.input} className={styles.allInput} />
        </form>
        <EventButton content='Ingresar' event={() => { }} className={styles.button} />
        <h2 className=' h-[5%] text-lg font-bold '>or</h2>
        <section className='flex justify-evenly w-full h-[10%]'>
          <Icons src={IconsSource.facebook} className='h-full' />
          <Icons src={IconsSource.google} className=' h-full' />
        </section>
      </FormCard>
    </aside>
  )
}
