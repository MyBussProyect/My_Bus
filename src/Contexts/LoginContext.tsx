import {
    useState,
    createContext,
    SetStateAction,
    ReactNode,
} from 'react';

type LogContext = {
    isLogin: boolean;
    setIsLogin: React.Dispatch<SetStateAction<boolean>>;
};

const LoginContext = createContext({} as LogContext);

export const LoginProvider = (Props: { children: ReactNode }) => {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <LoginContext.Provider
            value={{ isLogin, setIsLogin }}
        >
            {Props.children}
        </LoginContext.Provider>
    );
};

export default LoginContext;
