import { useContext, useEffect, useRef, useState } from 'react';
import { ChargeBar } from './ChargeBar';
import ValidateForm from '../../../../Contexts/FormOptions';
import SignContext from '../../../../Contexts/SignContext';
import UseUpload from '../../../../Hooks/useUpload';

export const Pic = () => {
  const { isSent } = useContext(ValidateForm);
  const { IsDriver, actualUser, setActualUser } = useContext(SignContext);
  const [thereIsPic, setThereIsPic] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [src, setSrc] = useState('');
  const handleChange = (event: any) => {
    setThereIsPic(true);
    setIsLoading(true);
    UseUpload(
      event.target.files[0],
      IsDriver ? 'DriversPhoto' : 'UsersPhoto',
      (data: string) => {
        setIsLoading(false);
        setTimeout(() => {
          (imgRef.current! as HTMLImageElement).src = data;
          setSrc(data);
        }, 200);
      },
    );
  };

  useEffect(() => {
    if (isSent) {
      setActualUser({
        ...actualUser,
        foto: src,
      });
    }
  }, [isSent]);

  const imgRef = useRef(null);

  return (
    <div id='Pic' className="h-full px-36 min-w-full overflow-hidden flex flex-col justify-between ">
      <button type="button" className="w-full border border-white rounded-xl  h-full relative object-cover">
        <input
          type="file"
          name="file"
          id="file"
          className="opacity-0 w-full mx-24 h-full left-0 absolute cursor-pointer z-10"
          onChange={handleChange}
        />
        {!thereIsPic ? (
          'Sube tu imagen'
        ) : (
          <>
            {isLoading ? (
              <ChargeBar />
            ) : (
              <img
                ref={imgRef}
                alt="img"
                className="h-[22rem] w-[100%] object-cover object-center"
              />
            )}
          </>
        )}
      </button>
    </div>
  );
};
