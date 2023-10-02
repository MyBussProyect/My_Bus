import RegisterContext from '../../../Contexts/RegisterContext';
import LoginContext from '../../../Contexts/LoginContext';
import { FullImagePart } from './RegisterPart';
import { ImagePart } from './ImagePart';
import { LoginPart } from './LoginPart';
import { TextPart } from './TextPart';
import { useContext } from 'react';
export const Main = () => {
  const { isLogin } = useContext(LoginContext);
  const { isRegister } = useContext(RegisterContext);
  return (
    <main className="relative flex h-[92%] overflow-hidden items-center justify-between">
      {!isRegister? (
        <>
          <ImagePart />
          {isLogin ? <LoginPart /> : <TextPart />}
        </>
      ) : <FullImagePart />}
    </main>
  );
};
