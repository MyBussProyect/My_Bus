export const BASE_URL = "http://mybuss.somee.com/"

export type UserLogin = {
    Documento?: string
    foto?: string
    nombre?: string
    apellido?: string
    edad?: number
    telefono?: string
    contraseña?: string
    correo?: string
}

export type DriverLogin = {
    CedulaC?: string
    Foto?: string
    Nombre?: string
    Contraseña?: string
    Apellido?: string
    Telefono?: string
    Correo?: string
    fkPlacaBus?: string | null
    edad?: number
    horaEntrada?: string
    horaSalida?: string
}

export type BusGetter = {
    fotoB:string
	colorB:string
	marcaB:string
	placaB:string
	modeloB:string
	cilindrajeB:number
	capacidadB:number
	numeroR:number
}