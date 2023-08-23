import { TextPart } from "./Elements/TextPart";
import { ImagePart } from './Elements/ImagePart';
import { LoginPart } from './Elements/LoginPart';

export const Main = () => {
  return (
    <main className='relative flex h-[90%] justify-between'>
        <ImagePart/>
        <TextPart/>
        <LoginPart/>
    </main>
  )
}
