export class Usuario {
    Documento?: string | null
    Foto: string | null
    Nombre: string | null
    Apellido: string | null
    Edad: number | null
    Telefono: string | null
    Contraseña: string | null
    Correo: string | null
    constructor(Documento: string, Foto: string, Nombre: string, Apellido: string, Edad: number, Telefono: string, Contraseña: string, Correo: string) {
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