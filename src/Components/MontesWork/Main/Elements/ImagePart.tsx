import { useEffect, useState } from "react"
import { Images } from "../../../../Consts/Constants"
const initialPosition = 0

export const ImagePart = () => {
  const elements = document.querySelectorAll(".element")
  const [position, setPosition] = useState(initialPosition)

  useEffect(() => {
    const interval =  setInterval(() => {
      setPosition((prevPosition) => (prevPosition === 4 ? 0 : prevPosition + 1));
    }, 4000)

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (position === 0) elements[position]?.scrollIntoView({ behavior: "instant" });
    else elements[position]?.scrollIntoView({ behavior: "smooth" });
  }, [position]);
  return (
    <section className=" relative overflow-hidden w-2/4 h-full">
      <section className="absolute w-full h-full z-10 ">
        <div className="w-full h-full flex items-center justify-center bg-black/80">
          <section className='text-white flex flex-col gap-8 items-center justify-between'>
            <h1 className=' text-5xl mr-44 font-montserrat'>BIENVENIDO <span className='text-yellow-400'>A</span></h1>
            <h2 className='text-8xl ml-44 font-[900] font-dancing-script'>My <span className='text-yellow-400'>Buss</span></h2>
          </section>
        </div>
      </section>
      <div className="relative overflow-x-scroll overflow-y-hidden flex -z-10 h-full items-center justify-between">
        <img src={Images.aside1} className="element h-full object-cover object-center" />
        <img src={Images.aside2} className="element h-full object-cover object-center" />
        <img src={Images.aside3} className="element h-full object-cover object-center" />
        <img src={Images.aside4} className="element h-full object-cover object-center" />
        <img src={Images.aside1} className="element h-full object-cover object-center" />
      </div>
    </section>
  )




}
