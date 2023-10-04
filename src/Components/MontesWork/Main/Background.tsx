import { Images } from "./../../../Consts/Constants"
import React from "react"
export const Background = () => {
    return (
        <div className="relative overflow-x-scroll flex-grow flex -z-10 h-full brightness-[40%]">
            <img src={Images.aside4} className="element w-full object-cover object-center overflow-y-clip" />
        </div>
    )
}
