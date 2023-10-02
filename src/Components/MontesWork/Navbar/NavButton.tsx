import { NavLink } from 'react-router-dom';
interface Props {
  content: string;
  path: string;
  className?: string;
}
export default ({ content, path, className }: Props) => {
  return (
    <li className={className}>
      <NavLink to={path}>{content}</NavLink>
    </li>
  );
};
