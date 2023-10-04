import React,{ useContext } from 'react';
import SignContext from '../../../../Contexts/SignContext';
export const AccountType = () => {
  const { IsDriver, setIsDriver } = useContext(SignContext);
  return (
    <section id='AccountType' className="flex px-24 flex-col min-w-full gap-10 justify-evenly">
      <div
        className="w-2/4 py-3 self-start rounded-3xl cursor-pointer"
        style={
          !IsDriver
            ? {
                background: '#fff',
                color: 'black',
                transition: 'all ease-in-out .2s',
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
        className="w-2/4  py-3 self-end rounded-3xl cursor-pointer"
        style={
          IsDriver
            ? {
                background: '#fff',
                color: 'black',
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
    </section>
  );
};
