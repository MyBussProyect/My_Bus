interface Props {
  className?: string;
  src: string;
  onMouseOver?: () => void;
  onMouseLeave?: () => void;
}

export default ({ className, src, onMouseOver, onMouseLeave }: Props) => {
  return (
    <a
      href="#"
      className=""
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <img src={src} alt={src} className={className} />
    </a>
  );
};
