import { FormEvent, MutableRefObject, useEffect, useState } from 'react';
import { BusGetter, DriverLogin } from '../../../Consts/Constants';
import { AddDriver } from './../DataProvider/Conductor';

type Props = {
    bussList: Array<BusGetter>,
    Driver: DriverLogin,
    formRef?: MutableRefObject<null>,
    filter?: number
}


const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
}

const handleSend = async (placa:string, Driver:DriverLogin) => {
    Driver.fkPlacaBus = placa
    await AddDriver(Driver)
}


export const SelectBus = ({ bussList, Driver, formRef , filter}: Props) => {
    const [localFilter, setLocalFilter] = useState(filter);

    useEffect(() => {
      setLocalFilter(filter);
    }, [filter]);
    return (
        <form ref={formRef} className='z-20 px-12 text-white flex-wrap flex-col items-center absolute left-0 h-full w-screen backdrop-blur-lg justify-evenly flex' onSubmit={handleSubmit}>
            <ul className='h-4/5 w-full  overflow-scroll flex justify-start gap-5'>
                {bussList.filter(fil => fil.numeroR == localFilter).map((el: BusGetter) => <Bus onClick={() => handleSend(el.placaB,Driver)}  Bus={el} />)}
            </ul>
        </form>
    )
}


const Bus = (props: { Bus: BusGetter, onClick?: () => void}) => {
    const { Bus, onClick } = props
    return (
        <div onClick={onClick} className={`flex flex-col justify-around text-black items-start p-5 h-full w-1/4 bg-white rounded-lg cursor-pointer`}>
            <h2 className='text-center text-xl font-extrabold self-center'> {Bus.placaB} </h2>
            <img src={Bus.fotoB} className='h-[150px] w-[150px] self-center' loading="lazy" alt="" /> 
            <p> <span className='text-black font-extrabold'>Modelo:</span> {Bus.modeloB} </p>
            <h2><span className='text-black font-extrabold'>marca:</span> {Bus.marcaB} </h2>
            <p><span className='text-black font-extrabold'>cilindraje:</span> {Bus.cilindrajeB} </p>
            <p><span className='text-black font-extrabold'>capacidad:</span> {Bus.capacidadB} </p>
            <p><span className='text-black font-extrabold'>Ruta:</span> {Bus.numeroR || "UNDEFINED"} </p>
        </div>
    )


}