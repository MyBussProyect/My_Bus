import React from 'react'
import { FormCard } from '../../FormCard'
import { Input } from '../../Input';
import { EventButton } from '../../EventButton';
//border must be almost black but not realy
"border-solid border-[2px] px-4 py-2 rounded-xl text-[20px] font-roboto text-black"
const styles = {
  input: "w-full py-2 rounded-md text-[15px] font-roboto text-black border border-solid px-4 border-intense-red ",
  label: "text-[15px] font-roboto text-black",
  button: "hover:scale-[110%] font-lato transition-all duration-300 px-4 text-roboco font-[700] text-center text-[15px] text-white bg-teal-green rounded-[7px] py-3 hover:bg-deep-blue",
  card: "before:blur-xl w-full h-full flex flex-col items-center justify-between py-7 px-14 border-intense-red rounded-md border-[2px] border-solid max-h-[700px] max-w-[600px] bg-no-repeat bg-cover bg-register ",
  allInput: "flex flex-col justify-between gap-2 w-full"
}

export const LoginPart = () => {
  return (
    <aside className="transition-all  duration-300 loginPart absolute top-0 right-0 w-2/4 h-full py-7 px-20 hidden items-center justify-center opacity-[0]">
      <FormCard className={styles.card}>
        <h2 className='text-[20px]  font-roboto text-black'>Iniciar Sesión</h2>
        <section className='flex flex-col overflow-y-scroll justify-between h-4/6 w-5/6'>

          <Input label='Nombre' type='text' labelStyle={styles.label} inputStyle={styles.input} className={styles.allInput} />
          <Input label='Email' type='email' labelStyle={styles.label} inputStyle={styles.input} className={styles.allInput} />
          <Input label='Contraseña' type='password' labelStyle={styles.label} inputStyle={styles.input} className={styles.allInput} />
          <Input label='fecha de nacimiento' type='date' labelStyle={styles.label} inputStyle={styles.input} className={styles.allInput} />
        </section>
          <EventButton content='REGISTRARSE' event={() => { }} className={styles.button} />
      </FormCard>
    </aside>
  )
}
