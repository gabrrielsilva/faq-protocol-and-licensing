type TitleProps = {
  text: string
}

export const Title = ({ text }: TitleProps) => {
  return <h1 className='text-xl text-white font-matterSemibold'>{text}</h1>
}