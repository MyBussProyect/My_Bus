import { findElement, toDisplay, toDisplayNone, toInvisible,toVisible } from "./Functions"
export const changeRegister = () => {
    const register = findElement(".register")
    const welcome = findElement(".welcome")
    
    setTimeout(() => {toInvisible(welcome)},1500)
    setTimeout(() => {
        toDisplayNone(welcome)
        toDisplay(register, "flex")
    },1800)
    setTimeout(() => {toVisible(register)},2100)
}

export const returnRegister = () => {
    const register = findElement(".register")
    const welcome = findElement(".welcome")
    setTimeout(() => {
        toDisplayNone(register)
        toDisplay(welcome, "flex")
        toInvisible(register)
        toVisible(welcome)
    }
    ,300)
}
