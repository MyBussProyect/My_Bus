
interface Props {
        content: string,
        event: () => void,
        className?: string
}


export const SendButton = ( { content, event, className }: Props) => {
  return (
    <input onClick={event} type='submit' className={className} value={content}/>
  )
}
