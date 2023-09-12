import { Background } from './Elements/Background';
import { Form } from './Elements/Form';
import { Welcome } from './Elements/Welcome';
export const FullImagePart = () => {
    return (
        <section className="transition-all self-center  duration-700 FullImagePart opacity-[0] relative  w-2/4 h-full">
            <Welcome/>            
            <Form/>
            <Background/>
        </section>
    )
}
