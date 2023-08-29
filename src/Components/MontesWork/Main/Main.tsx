import { TextPart } from "./Elements/TextPart";
import { ImagePart } from './Elements/ImagePart';
import { LoginPart } from './Elements/LoginPart';
import { FullImagePart } from './Elements/RegisterPart';

export const Main = () => {
  return (
    <main className='relative flex h-[90%] justify-between'>
        <ImagePart/>
        <FullImagePart/>
        <TextPart/>
        <LoginPart/>
    </main>
  )
}
