import { Header } from '../../MontesWork/Header';
import { Main } from '../../MontesWork/Main/Main';
import { RegisterProvider } from '../../../Contexts/RegisterContext';
import { LoginProvider } from '../../../Contexts/LoginContext';
export const PaginaPrincipal = () => {
  return (
    <div className="h-screen flex flex-col">
      <RegisterProvider>
        <LoginProvider>
          <Header />
          <Main />
        </LoginProvider>
      </RegisterProvider>
    </div>
  );
};
