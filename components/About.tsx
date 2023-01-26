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
      {Object.keys(projeto).map((key, i) => (
        <div key={i}>
          <H3 text={label[i]} />
          {key !== ('autarquias' as keyof Projeto) && (
            <Paragraph text={label[i].includes('data') && (projeto[key as keyof Projeto]) ? (projeto[key as keyof Projeto]?.toString()).substring(8, 10) + '/' + (projeto[key as keyof Projeto]?.toString()).substring(5, 7) + '/' + (projeto[key as keyof Projeto]?.toString()).substring(0, 4) : (projeto[key as keyof Projeto] as string | number)} />
          )}
        </div>
      ))}
    </section>
  )
}