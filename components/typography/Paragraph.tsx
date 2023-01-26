type ParagraphProps = {
  text: string | number
}

export const Paragraph = ({ text }: ParagraphProps) => {
  return <p className='pb-1 overflow-x-scroll text-lg text-gray-600 font-matterRegular whitespace-nowrap scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-400'>{text || '-'}</p>
}