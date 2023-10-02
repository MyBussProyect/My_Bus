import { useEffect, useState } from 'react';
import { Background } from './Background';
import { Form } from './Form';
import { Welcome } from './Welcome';
import RegisterContext from '../../../Contexts/RegisterContext';
import { useContext } from 'react';
import { SignProvider } from '../../../Contexts/SignContext';
import { FormResolver } from '../../../Contexts/FormOptions';
export const FullImagePart = () => {
  const { isRegister } = useContext(RegisterContext);
  const [isInit, setIsInit] = useState(true);
  const [isWelcome, setIsWelcome] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsInit(false);
    }, 100);

    setTimeout(() => {
      setIsWelcome(false);
    }, 2000);
  }, [isRegister]);

  return (
    <section
      style={isInit ? { width: '50vw', height: '50%', opacity: 0 } : {}}
      className="transition-[width_height_opacity] object-cover duration-700 relative w-full h-full"
    >
      {isWelcome ? (
        <section className="absolute w-full h-full z-10  welcome transition-opacity duration-300">
          <Welcome />
        </section>
      ) : (
        <SignProvider>
          <FormResolver>
            <Form />
          </FormResolver>
        </SignProvider>
      )}
      <Background />
    </section>
  );
};
