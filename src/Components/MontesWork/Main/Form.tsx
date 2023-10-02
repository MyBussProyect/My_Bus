import { useContext, useEffect, useRef, useState } from 'react';
import { changeBorderAt } from '../../../Consts/StyleEvents';
import { SectionTitle } from '../../../Consts/FormItems';
import { AccountType } from './FormSections/AccountType';
import { RequiredInfo } from './FormSections/RequiredInfo';
import { ContactInfo } from './FormSections/ContactInfo';
import { Pic } from './FormSections/Pic';
import { Password } from './FormSections/Password';
import ValidateForm from '../../../Contexts/FormOptions';
import SignContext from '../../../Contexts/SignContext';
import useFetch from '../../../Hooks/useFetch';
import { Toast } from '../Toast';

const ids = ['AccountType', 'RequiredInfo', 'ContactInfo', 'Pic', 'Password'];

export const Form = () => {
  const [ActualSection, setActualSection] = useState(0);
  const { IsDriver, actualUser } = useContext(SignContext);
  const { isValid } = useContext(ValidateForm);
  const [ThereIsToast, setThereIsToast] = useState(true);
  let formRef = useRef(null);

  useEffect(() => {
    document
      .getElementById(ids[ActualSection])!
      .scrollIntoView({ behavior: 'smooth' });
  }, [ActualSection]);

  const Register = () => {
    if (!isValid) return changeBorderAt(formRef, '#f00');
    useFetch({
      EndPoint: IsDriver ? 'Conductor/Crear' : 'User/Add',
      Body: actualUser,
      method: 'POST',
      CallBack: (_, err) => {
        if (err) {
          setThereIsToast(true);
          return;
        }
        location.reload();
      },
    });
  };

  const handleGoClick = () =>
    (!IsDriver && ActualSection === 4) || ActualSection === 7
      ? Register()
      : setActualSection(ActualSection + 1);

  const handleBackClick = () =>
    ActualSection === 0 ? null : setActualSection(ActualSection - 1);

  return (
    <article className="absolute items-center flex-col justify-center h-full w-full flex text-white register transition-opacity duration-300">
      <form
        ref={formRef}
        className="border borShadow w-screen flex flex-col items-center justify-around  backdrop-brightness-75 backdrop-blur-lg m-auto text-center text-ms relative text-white rounded-3xl h-[50rem] max-w-[50rem] transition-all duration-300"
      >
        <h2 className="text-3xl">{SectionTitle[ActualSection]}</h2>
        <section className="h-4/6 flex overflow-x-hidden overflow-y-auto justify-between max-w-full">
          <AccountType key={'AccountType'} />
          <RequiredInfo key={'RequiredInfo'} />
          <ContactInfo key={'ContactInfo'} />
          <Pic key={'Pic'} />
          <Password key={'Password'} />
        </section>
        <section className="flex w-full justify-center gap-3">
          <button
            onClick={handleBackClick}
            type="button"
            className="border border-[#ffffff33] w-2/6 rounded-2xl text-xl py-2 hover:invert transition-all bg-black"
          >
            Volver
          </button>
          <button
            onClick={handleGoClick}
            type="button"
            className="border border-[#ffffff33] w-2/6 rounded-2xl text-xl py-2 hover:invert transition-all bg-black"
          >
            Continuar
          </button>
        </section>
        </form>
        {ThereIsToast && (
          <Toast
            Status="DANGER"
            Message="Error al registrar"
            Duration={1500}
          />
        )}
    </article>
  );
};
