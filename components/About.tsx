import { Projeto } from '../pages'
import { H3 } from './typography/H3'
import { Paragraph } from './typography/Paragraph'

type AboutProps = {
  projeto: Projeto
}

const label = [
  'ID',
  'Descrição',
  'Data de acionamento',
  'Cidade',
  'Estado',
  'Data prevista de licença',
  'Data de licença',
  'Cliente',
  '1 - Autarquias Envolvidas'
]

export const About = ({ projeto }: AboutProps) => {
  return (
    <section className='grid w-full grid-cols-3 gap-5 p-6 overflow-hidden bg-white h-min rounded-xl max-h-[30rem]'>
      {Object.keys(projeto).map((key, i) => (
        <div key={i}>
          <H3 text={label[i]} />
          {key !== ('autarquias' as keyof Projeto) && (
            <Paragraph text={label[i].includes('Data') && (projeto[key as keyof Projeto]) ? (projeto[key as keyof Projeto]?.toString()).substring(8, 10) + '/' + (projeto[key as keyof Projeto]?.toString()).substring(5, 7) + '/' + (projeto[key as keyof Projeto]?.toString()).substring(0, 4) : (projeto[key as keyof Projeto] as string | number)} />
          )}
        </div>
      ))}
    </section>
  )
}