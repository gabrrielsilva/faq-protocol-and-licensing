import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { About } from '../components/About';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Tabs } from '../components/Tabs';
import { Title } from '../components/Title';

export type Projeto = {
  id: number
  descricao: string
  data_acionamento: string
  cidade: string
  estado: string
  data_previsao_licenca: string
  data_real_licenca: string
  cliente: string
  observacao_cliente: string
  orgao: string
  autarquias: Autarquia[]
}

type Autarquia = {
  id: string,
  nome: 'PREFEITURA' | 'CONVIAS' | 'RODOVIA' | 'FERROVIA' | 'ENERGIA',
  motivoAutarquiaSemProtocolo: string,
  statusAutarquia: 'ANALISE'| 'APROVADO' | 'REPROVADO' | 'PARADO' | 'CANCELADO',
  contatoAutarquia: string,
  ultimaInteracaoEPrazoResposta: string,
  desenvolverContato: string,
  proximosPassosEPrazo: string,
  vigencia: string,
  km_aereo: string,
  km_sub: string,
  data_previsao_protocolo: string,
  data_real_protocolo: string,
  protocolo: string,
}

const questions = [
  { question: 'Qual o motivo da autarquia não protocolada?', key: 'motivoAutarquiaSemProtocolo' },
  { question: 'Qual o status do projeto na autarquia?', key: 'statusAutarquia' },
  { question: 'Qual o contato da autarquia?', key: 'contatoAutarquia' },
  { question: 'Qual a última interação com a autarquia? e qual o prazo para resposta?', key: 'ultimaInteracaoEPrazoResposta' },
  { question: 'É possível desenvolver algum contato com a autarquia?', key: 'desenvolverContato' },
  { question: 'Quais os próximos passos do processo?', key: 'proximosPassosEPrazo' },
  { question: 'Qual a vigência?', key: 'vigencia' },
]

export default function Home({ projetos }: { projetos: Projeto[] }) {
  const [projeto, setProjeto] = useState<Projeto>(projetos[0]);
  const handleProjeto = (id: number) => setProjeto(projetos.find(projeto => projeto.id === id) as Projeto);

  return (
    <div className='overflow-x-hidden'>
      <Head>
        <title>Infinitel: FAQ</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='flex flex-col items-center w-screen h-full min-h-screen bg-[#121212]'>
        <Header />
        <main className='flex flex-auto w-full max-w-7xl'>
          <div className='grid w-full grid-cols-5'>
            <Sidebar projetos={projetos.map(p => p.id)} handleProjeto={handleProjeto} />
            <section className='flex flex-col col-span-4 gap-5 pt-10 pl-10'>
              <Title text='Informações' />
              <About projeto={projeto} />
              <Tabs autarquias={projeto.autarquias.map(autarquia => {
                return { 
                  name: autarquia.nome, 
                  faq: questions.map(({ question, key }) => { return { question: question, answer: autarquia[key as keyof Autarquia]}}),
                  about: {
                    km_aereo: autarquia.km_aereo,
                    km_sub: autarquia.km_sub,
                    data_previsao_protocolo: autarquia.data_previsao_protocolo,
                    data_real_protocolo: autarquia.data_real_protocolo,
                    protocolo: autarquia.protocolo
                  }
                }
              })} />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`);
  const data = await response.json() as { projects: Projeto[] };
  const projetos = data['projects'].map((projeto) => projeto);

  return {
    props: {
      projetos,
    },
  };
};
