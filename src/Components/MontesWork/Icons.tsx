import React from 'react'

interface Props {
  className?: string,
  src: string,
  onMouseOver?: () => void,
  onMouseLeave?: () => void
}

export const Icons: React.FC<Props> = ({ className, src, onMouseOver, onMouseLeave }) => {
  return (
      <a href="#" className='my-12' onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
        <img src={src} alt={src} className={className} />
      </a>
  )
}
