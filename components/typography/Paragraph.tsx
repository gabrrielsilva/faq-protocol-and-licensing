type ParagraphProps = {
  text: string | number
}

export const Paragraph = ({ text }: ParagraphProps) => {
  return <p className='text-lg text-gray-600 font-matterRegular'>{text}</p>
}