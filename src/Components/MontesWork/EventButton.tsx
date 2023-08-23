import React from 'react'

interface Props {
        content: string,
        event: () => void,
        className?: string
}


export const EventButton = ( { content, event, className }: Props) => {
  return (
    <button onClick={event} className={className}>
      {content}
    </button>
  )
}
