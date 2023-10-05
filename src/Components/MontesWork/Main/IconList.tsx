import Icons from '../Icons';
import { IconsSource } from '../../../Consts/Constants';

const iconClassName =
  'h-[80px] hover:scale-[120%] transition-[transform] duration-300';

const IconList = () => {
  return (
    <div className="flex w-full justify-between">
      <Icons src={IconsSource.RUTA} className={iconClassName} />

      <Icons src={IconsSource.CONTACTO} className={iconClassName} />

      <Icons src={IconsSource.REDES} className={iconClassName} />

      <Icons src={IconsSource.DESCARGAR} className={iconClassName} />
    </div>
  );
};

export default IconList;
