import {
    useState,
    createContext,
    SetStateAction,
    ReactNode,
} from 'react';

type RegContext = {
    isRegister: boolean;
    setIsRegister: React.Dispatch<SetStateAction<boolean>>;
};

const RegisterContext = createContext({} as RegContext);

export const RegisterProvider = (Props: { children: ReactNode }) => {
    const [isRegister, setIsRegister] = useState(false);
    return (
        <RegisterContext.Provider
            value={{ isRegister, setIsRegister }}
        >
            {Props.children}
        </RegisterContext.Provider>
    );
};

export default RegisterContext;
