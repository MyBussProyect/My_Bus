import React from 'react'
//children prop
interface Props {
    children: React.ReactNode,
    className?: string
}

export const FormCard = ( { children, className }: Props ) => {
  return (
    <section className={className}>
        {children}
    </section>
  )
}
