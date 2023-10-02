import { Usuario } from "../Models/Usuario"

export const getUser = () => {
    const correo = (document.getElementById("CorreoField") as HTMLInputElement).value
    const telefono = (document.getElementById("TelefonoField") as HTMLInputElement).value
    const image = (document.getElementById("ImageField") as HTMLImageElement).src
    const documento = (document.getElementById("DocumentoField") as HTMLInputElement).value
    const nombre = (document.getElementById("NombreField") as HTMLInputElement).value
    const apellido = (document.getElementById("ApellidoField") as HTMLInputElement).value
    const edad = parseInt((document.getElementById("EdadField") as HTMLInputElement).value)
    const password = (document.getElementById("PasswordField") as HTMLInputElement).value
    return new Usuario (documento, image, nombre, apellido, edad, telefono, password, correo)
}