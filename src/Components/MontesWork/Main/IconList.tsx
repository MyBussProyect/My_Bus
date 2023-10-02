import Icons from '../Icons';
import { IconsSource } from '../../../Consts/Constants';

const iconClassName =
  'h-[80px] hover:scale-[120%] transition-[transform] duration-300';

const IconList = () => {
  return (
    <div className="flex w-full justify-between">
      <Icons src={IconsSource.ruta} className={iconClassName} />

      <Icons src={IconsSource.contacto} className={iconClassName} />

      <Icons src={IconsSource.redes} className={iconClassName} />

      <Icons src={IconsSource.descargar} className={iconClassName} />
    </div>
  );
};

export default IconList;
