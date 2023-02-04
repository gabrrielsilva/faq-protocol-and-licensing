type ParagraphProps = {
  text: string | number
}

export const Paragraph = ({ text }: ParagraphProps) => {
  return <p className='pb-1 pr-2 overflow-y-scroll text-lg text-gray-600 font-matterRegular max-h-20 scrollbar-thin scrollbar-track-slate-200 scrollbar-thumb-blue-600'>{text || '-'}</p>
}