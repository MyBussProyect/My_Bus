import React, { useEffect } from 'react'
import { Images } from '../../../../Consts/Constants'
import { FormCard } from '../../FormCard';
import { Input } from '../../Input';
import { ComboBox } from '../../ComboBox';
import {  findElement,  replaceClass, toDisplay, toDisplayNone, toInvisible, toVisible } from '../../../../Consts/Functions';
import { EventButton } from '../../EventButton';
import { Styles } from '../../../../Consts/Styles.';
import { SendButton } from '../../SendButton';
const userOptions = ["Usuario", "Conductor"]

const styles = {
    inputs: 'rounded-[10px] text-black px-3 py-1'
}


//en horas
const horaryOptions = ["06:00-14:00", "14:00-22:00"]

const rutes = ["Ruta 1", "Ruta 2", "Ruta 3", "Ruta 4", "Ruta 5", "Ruta 6", "Ruta 7", "Ruta 8", "Ruta 9", "Ruta 10", "Ruta 11",
    "Ruta 12", "Ruta 13", "Ruta 14", "Ruta 15", "Ruta 16", "Ruta 17", "Ruta 18", "Ruta 19", "Ruta 20",  "Ruta 21", "Ruta 22",
    "Ruta 23", "Ruta 24", "Ruta 25", "Ruta 26", "Ruta 27", "Ruta 28", "Ruta 29", "Ruta 30",]


export const FullImagePart = () => {
    const [isDriver, setIsDriver] = React.useState(false)
    const horary = findElement(".horary")
    const regButton = findElement(".registerButton")
    const rutesBox = findElement(".rutesBox")
    useEffect(() => {
        if(isDriver){
            toDisplay(horary, "flex")
            toDisplay(rutesBox, "flex")
        }else {
            toInvisible([horary,rutesBox])
        }
        setTimeout(() => {
            if (isDriver) {
                toVisible([horary, rutesBox])
                replaceClass(regButton, "bottom-[50%]", "bottom-[10%]")
            } else {
                toDisplayNone(horary)
                replaceClass(regButton, "bottom-[10%]", "bottom-[50%]")
            }
        }, 200)

    }, [isDriver])



    return (
        <section className="transition-all self-center  duration-700 FullImagePart opacity-[0] relative  w-2/4 h-full">
            <section className="absolute w-full h-full z-10  welcome transition-opacity duration-300">
                <div className="w-full h-full flex items-center justify-center ">
                    <section className='text-white flex flex-col gap-8 items-center justify-between'>
                        <h1 className=' text-5xl mr-44 font-montserrat'>BIENVENIDO <span className='text-yellow-400'>A</span></h1>
                        <h2 className='text-8xl ml-44 font-[900] font-dancing-script'>My <span className='text-yellow-400'>Buss</span></h2>
                    </section>
                </div>
            </section>

            <form className='absolute items-center justify-around hidden opacity-[0] h-full w-full text-white register transition-opacity duration-300'>
                <FormCard className='w-[35%] h-3/4 flex flex-col justify-between rounded-[15px] backdrop-blur-[2px] backdrop-brightness-[50%] px-12 py-12'>
                    <ComboBox fullClassName='flex flex-col gap-2' onChange={() => setIsDriver(!isDriver)} label='Tipo de cuenta' className='bg-transparent text-black text-center px3 py-2 h-[2.1rem] rounded-t-[10px] userCombo' elements={userOptions} />
                    <Input label='Documento' type='text' className='flex gap-2 flex-col' inputStyle={styles.inputs} />
                    <Input label='Nombre' type='text' className='flex gap-2 flex-col' inputStyle={styles.inputs} />
                    <Input label='Apellido' type='text' className='flex gap-2 flex-col' inputStyle={styles.inputs} />
                </FormCard>
                <section className='h-3/4 w-[15%] relative'>
                    <ComboBox fullClassName='absolute top-[10%]  hidden opacity-[0] w-full flex-col gap-2 horary text-center transition-opacity duration-300 ease-in-out' label='Horario' className='cursor-pointer transition-all duration-300 ease-in-out bg-white text-black text-center px3 rounded-t-[10px]' elements={horaryOptions} />
                    <ComboBox fullClassName='absolute  bottom-[50%] hidden opacity-[0] w-full flex-col gap-2 rutesBox text-center transition-opacity duration-300 ease-in-out' label='Rutas' className='cursor-pointer transition-all duration-300 ease-in-out bg-white text-black text-center px3 rounded-t-[10px]' elements={rutes} />
                    <SendButton content='Registrarse' event={() => { }} className={Styles.defaultButton +' absolute bottom-[50%] w-full py-3 rounded-[10px] text-xl text-center registerButton'} />
                </section>
                <FormCard className=' w-[35%] h-3/4 flex flex-col justify-between rounded-[15px] backdrop-blur-[2px] backdrop-brightness-[50%] px-12 py-12'>
                    <Input label='Edad' type='number' className='flex gap-2 flex-col' inputStyle={styles.inputs} />
                    <Input label='Correo electronico' type='email' className='flex gap-2 flex-col' inputStyle={styles.inputs} />
                    <Input label='Telefono' type='text' className='flex gap-2 flex-col' inputStyle={styles.inputs} />
                    <Input label='Contraseña' type='password' className='flex gap-2 flex-col' inputStyle={styles.inputs} />
                </FormCard>
            </form>


            <div className="relative overflow-x-scroll flex-grow flex -z-10 h-full items-center justify-between brightness-[40%]">
                <img src={Images.aside4} className="element w-full object-cover object-center overflow-y-clip" />
            </div>
        </section>
    )
}
