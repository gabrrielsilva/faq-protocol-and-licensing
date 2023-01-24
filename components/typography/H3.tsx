type H3Props = {
  text: string
}

export const H3 = ({ text }: H3Props) => {
  return <h3 className='text-lg leading-5 font-matterSemibold'>{text}</h3>
}