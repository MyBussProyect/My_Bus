export class User {
    Documento: string
    Foto: string | null
    Nombre: string 
    Apellido: string
    Edad: number
    Telefono: string
    Contraseña: string
    Correo: string
    constructor({Documento, Foto, Nombre, Apellido, Edad, Telefono, Contraseña, Correo}:user) {
        this.Documento = Documento;
        this.Foto = Foto;
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Edad = Edad;
        this.Telefono = Telefono;
        this.Contraseña = Contraseña;
        this.Correo = Correo;
    }
}


type user = {
    Documento: string
    Foto: string | null
    Nombre: string
    Apellido: string
    Edad: number
    Telefono: string
    Contraseña: string
    Correo: string
}
