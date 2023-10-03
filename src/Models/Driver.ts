class Driver {
  CedulaC: string;
  Foto: string;
  Nombre: string;
  Contraseña: string;
  Apellido: string;
  Telefono: string;
  Correo: string;
  fkPlacaBus: string;
  edad: number;
  horaEntrada: string;
  horaSalida: string;

  constructor(Driver:driver) {
    this.CedulaC = Driver.CedulaC;
    this.Foto = Driver.Foto;
    this.Nombre = Driver.Nombre;
    this.Contraseña = Driver.Contraseña;
    this.Apellido = Driver.Apellido;
    this.Telefono = Driver.Telefono;
    this.Correo = Driver.Correo;
    this.fkPlacaBus = Driver.fkPlacaBus;
    this.edad = Driver.edad;
    this.horaEntrada = Driver.horaEntrada;
    this.horaSalida = Driver.horaSalida;
  }
}





type driver = {
    CedulaC: string
    Foto: string
    Nombre: string
    Contraseña: string
    Apellido: string
    Telefono: string
    Correo: string
    fkPlacaBus: string
    edad: number
    horaEntrada: string
    horaSalida: string
}
