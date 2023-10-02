import { useEffect, useContext, useRef } from 'react';
import { Input } from '../../Input';

import ValidateForm from '../../../../Contexts/FormOptions';
import SignContext from '../../../../Contexts/SignContext';
const FullInputStyle = 'flex flex-col w-full gap-2';
const InputStyle = 'text-black  px-5 py-1 rounded-2xl';
const LabelStyle = 'self-start font-semibold';

export const RequiredInfo = () => {
  const { IsDriver, actualUser, setActualUser } = useContext(SignContext);
  const {isSent} = useContext(ValidateForm);
  const DocumentoRef = useRef(null);
  const NombreRef = useRef(null);
  const ApellidoRef = useRef(null);
  const EdadRef = useRef(null);

  let Documento = (DocumentoRef.current! as HTMLInputElement);
  let Nombre = (NombreRef.current! as HTMLInputElement);
  let Apellido = (ApellidoRef.current! as HTMLInputElement);
  let Edad = (EdadRef.current! as HTMLInputElement);

  useEffect(() => {

    if (!isSent) return;
      let Doc = IsDriver ? { "CedulaC": Documento.value } : { "Documento": Documento.value };
      const newUser = {
        ...actualUser,
        ...Doc,
        "nombre": Nombre.value,
        "apellido": Apellido.value,
        "edad": Edad.value,
      }
      setActualUser(newUser);
    
  }, [isSent]);

  return (
    <div id="RequiredInfo" className="px-24 h-full min-w-full flex flex-col justify-between">
      <Input
        inputRef={DocumentoRef}
        label="Documento"
        className={FullInputStyle}
        inputStyle={InputStyle}
        labelStyle={LabelStyle}
        type="text"
      />
      <Input
        inputRef={NombreRef}
        label="Nombre"
        className={FullInputStyle}
        inputStyle={InputStyle}
        labelStyle={LabelStyle}
        type="text"
      />
      <Input
        inputRef={ApellidoRef}
        label="Apellido"
        className={FullInputStyle}
        inputStyle={InputStyle}
        labelStyle={LabelStyle}
        type="text"
      />
      <Input
        inputRef={EdadRef}
        label="Edad"
        className={FullInputStyle}
        inputStyle={InputStyle}
        labelStyle={LabelStyle}
        type="number"
      />
    </div>
  );
};
