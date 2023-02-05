import { Projeto } from '../pages'
import { H3 } from './typography/H3'
import { Paragraph } from './typography/Paragraph'

type AboutProps = {
  projeto: Projeto
}

const items = [
  { label: 'ID', field: 'id' },
  { label: 'Descrição', field: 'descricao' },
  { label: 'Data de acionamento', field: 'data_acionamento' },
  { label: 'Cidade', field: 'cidade' },
  { label: 'Estado', field: 'estado' },
  { label: 'Data prevista de licença', field: 'data_previsao_licenca' },
  { label: 'Data de licença', field: 'data_real_licenca' },
  { label: 'Cliente', field: 'cliente' },
  { label: 'Prioridade', field: 'prioridade' },
  { label: '1 - Autarquias envolvidas', field: 'orgao' }
]

export const About = ({ projeto }: AboutProps) => {
  return (
    <section className='grid w-full grid-cols-3 gap-5 p-6 overflow-hidden bg-white h-min rounded-xl max-h-[30rem]'>
      {items.map(({ label, field }) => (
        <div key={field}>
          <H3 text={label} />
          <Paragraph text={label?.includes('Data') && projeto[field as keyof Projeto] ? (projeto[field as keyof Projeto]?.toString())?.substring(8, 10) + '/' + (projeto[field as keyof Projeto]?.toString())?.substring(5, 7) + '/' + (projeto[field as keyof Projeto]?.toString())?.substring(0, 4) : (projeto[field as keyof Projeto] as string | number)} />
        </div>
      ))}
    </section>
  )
}