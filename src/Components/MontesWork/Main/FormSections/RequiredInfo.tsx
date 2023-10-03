import { Input } from '../../Input';

const FullInputStyle = 'flex flex-col w-full gap-2';
const InputStyle = 'text-black  px-5 py-1 rounded-2xl';
const LabelStyle = 'self-start font-semibold';

export const RequiredInfo = () => {
  return (
    <div
      id="RequiredInfo"
      className="px-24 h-full min-w-full flex flex-col justify-between"
    >
      <Input
        InputId="DocumentoField"
        label="Documento"
        className={FullInputStyle}
        inputStyle={InputStyle}
        labelStyle={LabelStyle}
        type="text"
      />
      <Input
        InputId="NombreField"
        label="Nombre"
        className={FullInputStyle}
        inputStyle={InputStyle}
        labelStyle={LabelStyle}
        type="text"
      />
      <Input
        InputId="ApellidoField"
        label="Apellido"
        className={FullInputStyle}
        inputStyle={InputStyle}
        labelStyle={LabelStyle}
        type="text"
      />
      <Input
        InputId="EdadField"
        label="Edad"
        className={FullInputStyle}
        inputStyle={InputStyle}
        labelStyle={LabelStyle}
        type="number"
      />
    </div>
  );
};
