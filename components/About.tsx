import { Projeto } from '../pages'
import { H3 } from './typography/H3'
import { Paragraph } from './typography/Paragraph'

type AboutProps = {
  projeto: Projeto
}

const label = [
  'ID',
  'descrição',
  'data de acionamento',
  'cidade',
  'estado',
  'data prevista de licença',
  'data de licença',
  'cliente',
  'observações do cliente',
  'orgão'
]

export const About = ({ projeto }: AboutProps) => {
  return (
    <section className='grid w-full grid-cols-3 gap-5 p-6 bg-white h-min rounded-xl'>
      {Object.values(projeto).map((value, i) => (
        <div key={i}>
          <H3 text={label[i]} />
          <Paragraph text={value?.toString()} />
        </div>
      ))}
    </section>
  )
}