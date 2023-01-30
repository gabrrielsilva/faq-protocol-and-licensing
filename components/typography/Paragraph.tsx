type ParagraphProps = {
  text: string | number
}

export const Paragraph = ({ text }: ParagraphProps) => {
  return <p className='pb-1 text-lg text-gray-600 font-matterRegular'>{text || '-'}</p>
}