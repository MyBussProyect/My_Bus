import React from 'react'

export const Welcome = () => {
    return (
    <section className="absolute w-full h-full z-10  welcome transition-opacity duration-300">
        <div className="w-full h-full flex items-center justify-center ">
            <section className='text-white flex flex-col gap-8 items-center justify-between'>
                <h1 className=' text-5xl mr-44 font-montserrat'>BIENVENIDO <span className='text-yellow-400'>A</span></h1>
                <h2 className='text-8xl ml-44 font-[900] font-dancing-script'>My <span className='text-yellow-400'>Buss</span></h2>
            </section>
        </div>
    </section>
    )
}
