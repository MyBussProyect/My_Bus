import { TextPart } from './TextPart';
import { ImagePart } from './ImagePart';

export const Main = () => {
  return (
    <section className='flex flex-grow justify-between px-12'>
        <TextPart/>
        <ImagePart/>
    </section>
  )
}
