import { User } from '../Models/User';

export const getUser = () => {
  const correo = (document.getElementById('CorreoField') as HTMLInputElement)
    .value;
  const telefono = (
    document.getElementById('TelefonoField') as HTMLInputElement
  ).value;
  const image = (document.getElementById('ImageField') as HTMLImageElement).src;
  const documento = (
    document.getElementById('DocumentoField') as HTMLInputElement
  ).value;
  const nombre = (document.getElementById('NombreField') as HTMLInputElement)
    .value;
  const apellido = (
    document.getElementById('ApellidoField') as HTMLInputElement
  ).value;
  const edad = parseInt(
    (document.getElementById('EdadField') as HTMLInputElement).value,
  );
  const contraseña = (
    document.getElementById('ContraseñaField') as HTMLInputElement
  ).value;
  return new User({
    Documento : documento,
    Foto : image,
    Nombre : nombre,
    Apellido : apellido,
    Edad : edad,
    Telefono : telefono,
    Contraseña : contraseña,
    Correo : correo,
  });
};
