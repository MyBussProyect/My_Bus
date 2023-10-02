import { ReactNode, createContext, useState } from 'react';

type Context = {
  isValid: boolean;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
  isSent: boolean;
  setIsSent: React.Dispatch<React.SetStateAction<boolean>>;
};

const ValidateForm = createContext({} as Context);

export const FormResolver = (Props: { children: ReactNode }) => {
  const [isValid, setIsValid] = useState(true);
  const [isSent, setIsSent] = useState(false);
  return (
    <ValidateForm.Provider value={{ isValid, setIsValid, isSent, setIsSent }}>
      {Props.children}
    </ValidateForm.Provider>
  );
};

export default ValidateForm;
