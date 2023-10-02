import { useContext, useEffect, useRef } from 'react';
import { Input } from '../../Input';
import SignContext from '../../../../Contexts/SignContext';
import ValidateForm from '../../../../Contexts/FormOptions';

const FullInputStyle = 'flex flex-col w-full gap-2';
const InputStyle = 'text-black  px-5 py-1 rounded-2xl';
const LabelStyle = 'self-start font-semibold';
export const ContactInfo = () => {
  const { isSent } = useContext(ValidateForm);
  const { actualUser, setActualUser } = useContext(SignContext);
  const mailRef = useRef(null);
  const telRef = useRef(null);

  let telefono = telRef.current! as HTMLInputElement;
  let correo = mailRef.current! as HTMLInputElement;

  useEffect(() => {
    if (!isSent) return;
    const newUser = {
      ...actualUser,
      telefono: telefono.value,
      correo: correo.value,
    };
    setActualUser(newUser);
  }, [isSent]);

  return (
    <div id='ContactInfo' className="px-24 h-full min-w-full w-4/6 flex flex-col justify-center gap-16">
      <Input
        inputRef={mailRef}
        label="Correo"
        className={FullInputStyle}
        inputStyle={InputStyle}
        labelStyle={LabelStyle}
        type="email"
      />
      <Input
        inputRef={telRef}
        label="telefono"
        className={FullInputStyle}
        inputStyle={InputStyle}
        labelStyle={LabelStyle}
        type="text"
      />
    </div>
  );
};
