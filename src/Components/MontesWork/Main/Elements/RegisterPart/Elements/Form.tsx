import { useState, useEffect, useRef, FormEvent } from 'react'
import { toDisplay, toInvisible, toVisible, replaceClass, toDisplayNone, findElement } from '../../../../../../Consts/Functions'
import { Styles } from '../../../../../../Consts/Styles.'
import { ComboBox } from '../../../../ComboBox';
import { FormCard } from '../../../../FormCard'
import { Input } from '../../../../Input'
import { SendButton } from '../../../../SendButton'
import { getRutes } from '../../../../DataProvider/Rutas'
import { AddUser } from '../../../../DataProvider/Usuario';
import { BusGetter, DriverLogin, UserLogin } from '../../../../DataProvider/Constants';
import { getBuses } from '../../../../DataProvider/Bus';
import { SelectBus } from './SelectBus';
import { EventButton } from '../../../../EventButton';


async function getAllRutes() {
    const rutas = await getRutes()
    rutas.map((element: { numeroR: string; }) => rutes.push(`Ruta ${element.numeroR}`));
}
async function getAllBuses (){
    const Buses = await getBuses()
    Buses.map((element) => buses.push(element));
}

const HoraryOptions = [["06:00:00", "14:00:00"], ["14:00:00", "22:00:00"]]
const horaryOptions = ["06:00-14:00", "14:00-22:00"]
const userOptions = ["Usuario", "Conductor"]
const buses:BusGetter[] = []
const rutes: string[] = []

export const Form = () => {
    const [actualRute, setAcualRute] = useState(4)
    const [selectBus ,setSelectBus] = useState(false)
    const horary = findElement(".horary")
    const regButton = findElement(".registerButton")
    const rutesBox = findElement(".rutesBox")
    const [isDriver, setIsDriver] = useState(false)
    useEffect(() => {
        if (isDriver) {
            toDisplay(horary, "flex")
            toDisplay(rutesBox, "flex")
        } else {
            toInvisible([horary, rutesBox])
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

    const Documento = useRef(null)
    const Nombre = useRef(null)
    const Apellido = useRef(null)
    const Edad = useRef(null)
    const Correo = useRef(null)
    const Telefono = useRef(null)
    const Contraseña = useRef(null)
    const Horary = useRef(null)
    const Ruta = useRef(null)
    useEffect(() => { 
        getAllRutes();
        getAllBuses();
        }, [])

    const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        isDriver ? SelectTheBus() : await AddUser(getUser())
    }

    const SelectTheBus = () => {
        setAcualRute(parseInt(rutes[Ruta.current?.value].replace("Ruta ", "")))
        setSelectBus(true)
    }

    const getUser = ():UserLogin => {
        return {
            Documento: Documento.current?.value,
            foto: "",
            nombre: Nombre.current?.value,
            apellido: Apellido.current?.value,
            edad: parseInt(Edad.current?.value),
            telefono: Telefono.current?.value,
            contraseña: Contraseña.current?.value,
            correo: Correo.current?.value
        }
    }
    
    const getDriver = ():DriverLogin => {
        const horaryIndex = parseInt(Horary.current?.value)
        return{    
            CedulaC: Documento.current?.value,
            Foto: "",
            Nombre: Nombre.current?.value,
            Contraseña: Contraseña.current?.value,
            Apellido: Apellido.current?.value,
            Telefono: Telefono.current?.value,
            Correo:  Correo.current?.value,
            fkPlacaBus: null,
            edad:  parseInt(Edad.current?.value),
            horaEntrada: HoraryOptions[horaryIndex][0],
            horaSalida: HoraryOptions[horaryIndex][1]
        }
    }

    return (
        <form onSubmit={handleRegister}  className={Styles.form}>
            {selectBus && (<SelectBus bussList={buses} Driver={getDriver()} filter={actualRute}/>)}
            {selectBus && (<EventButton content='CANCELAR' className='absolute z-[21] bottom-[20px] right-[20px] font-extrabold ' event={() => setSelectBus(false)}/>)}
            <FormCard className='w-[35%] h-3/4 flex flex-col justify-between rounded-[15px] backdrop-blur-[2px] backdrop-brightness-[50%] px-12 py-12'>
                <ComboBox fullClassName='flex flex-col gap-2' onChange={() => setIsDriver(!isDriver)} label='Tipo de cuenta' className='bg-transparent text-black text-center px3 py-2 h-[2.1rem] rounded-t-[10px] userCombo' elements={userOptions} />
                <Input inputRef={Documento} label='Documento' type='text' className={Styles.fullInput} inputStyle={Styles.inputs + " DocumentoU"} />
                <Input inputRef={Nombre} label='Nombre' type='text' className={Styles.fullInput} inputStyle={Styles.inputs + " NombreU"} />
                <Input inputRef={Apellido} label='Apellido' type='text' className={Styles.fullInput} inputStyle={Styles.inputs + " ApellidoU"} />
            </FormCard>
            <section className='h-3/4 w-[15%] relative'>
                <ComboBox selectRef={Horary} fullClassName='absolute top-[10%]  hidden opacity-[0] w-full flex-col gap-2 horary text-center transition-opacity duration-300 ease-in-out' label='Horario' className='cursor-pointer transition-all duration-300 ease-in-out bg-white text-black text-center px3 rounded-t-[10px]' elements={horaryOptions} />
                <ComboBox selectRef={Ruta}  fullClassName='absolute  bottom-[50%] hidden opacity-[0] w-full flex-col gap-2 rutesBox text-center transition-opacity duration-300 ease-in-out' label='Rutas' className='cursor-pointer transition-all duration-300 ease-in-out bg-white text-black text-center px3 rounded-t-[10px]' elements={rutes} />
                <SendButton content='Registrarse' event={() => { }} className={Styles.defaultButton + ' absolute bottom-[50%] w-full py-3 rounded-[10px] text-xl text-center registerButton'} />
            </section>
            <FormCard className=' w-[35%] h-3/4 flex flex-col justify-between rounded-[15px] backdrop-blur-[2px] backdrop-brightness-[50%] px-12 py-12'>
                <Input inputRef={Edad} label='Edad' type='number' className={Styles.fullInput} inputStyle={Styles.inputs + " EdadU"} />
                <Input inputRef={Correo} label='Correo electronico' type='email' className={Styles.fullInput} inputStyle={Styles.inputs + " CorreoU"} />
                <Input inputRef={Telefono} label='Telefono' type='text' className={Styles.fullInput} inputStyle={Styles.inputs + " TelefonoU"} />
                <Input inputRef={Contraseña} label='Contraseña' type='password' className={Styles.fullInput} inputStyle={Styles.inputs + " ContraseñaU"} />
            </FormCard>
        </form>

    )
}

