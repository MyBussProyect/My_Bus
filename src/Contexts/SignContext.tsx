import { ReactNode, createContext, useState, SetStateAction } from 'react';

const SignContext = createContext({} as Context);



type Context = {
  actualUser: {};
  setActualUser: React.Dispatch<SetStateAction<{}>>;
  IsDriver: boolean;
  setIsDriver: React.Dispatch<SetStateAction<boolean>>;
};
export const SignProvider = (props: { children: ReactNode }) => {
  const [actualUser, setActualUser] = useState({});
  const [IsDriver, setIsDriver] = useState(true);
  return (
    <SignContext.Provider
      value={{
        actualUser: actualUser,
        setActualUser: setActualUser,
        IsDriver: IsDriver,
        setIsDriver: setIsDriver,
      }}
    >
      {props.children}
    </SignContext.Provider>
  );
};

export default SignContext;