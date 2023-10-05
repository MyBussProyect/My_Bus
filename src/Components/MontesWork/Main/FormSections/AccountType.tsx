import { useContext } from 'react';
import SignContext from '../../../../Contexts/SignContext';
import { Messages } from '../../../../Consts/Constants';
export const AccountType = () => {
  const { IsDriver, setIsDriver } = useContext(SignContext);
  return (
    <section id='AccountType' className="flex relative px-24 flex-col min-w-full gap-10 justify-evenly">
      <div
        className="w-2/5 py-3 self-start rounded-xl text-xl cursor-pointer"
        style={
          !IsDriver
            ? {
                background: 'rgb(0 128 128)',
                transition: 'background ease-in-out .2s',
              }
            : { background: '#444' }
        }
        onClick={() => {
          setIsDriver(false);
        }}
      >
        Usuario
      </div>
      <div
        className="w-2/5  py-3 self-start rounded-xl text-xl cursor-pointer"
        style={
          IsDriver
            ? {
                background: '#aa4a4a',
                transition: 'all ease-in-out .2s',
              }
            : { background: '#444' }
        }
        onClick={() => {
          setIsDriver(true);
        }}
      >
        Conductor
      </div>
      <div className='w-2/5 absolute right-24 p-4 border bg-black/50 backdrop-blur-3xl rounded-lg h-3/6'>
        <p  className='text-start text-xl'>
          {IsDriver? Messages.DRIVER_TEXT: Messages.USER_TEXT}
        </p>
      </div>

    </section>
  );
};
