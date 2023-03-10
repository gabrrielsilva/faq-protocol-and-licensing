import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRef, useState } from 'react';
import * as XLSX from 'xlsx';
import { About } from '../components/About';
import { Sidebar } from '../components/Sidebar';
import { Tabs } from '../components/Tabs';
import { Title } from '../components/Title';

export type Projeto = {
  id: number;
  descricao: string;
  data_acionamento: string;
  cidade: string;
  estado: string;
  data_previsao_licenca: string;
  data_real_licenca: string;
  cliente: string;
  prioridade: string;
  orgao: string;
  autarquias: Autarquia[];
};

export type Autarquia = {
  id: string;
  nome: 'PREFEITURA' | 'CONVIAS' | 'RODOVIA' | 'FERROVIA' | 'ENERGIA';
  motivoAutarquiaSemProtocolo: string;
  statusAutarquia: 'ANALISE' | 'APROVADO' | 'REPROVADO' | 'PARADO' | 'CANCELADO';
  contatoAutarquia: string;
  ultimaInteracaoEPrazoResposta: string;
  desenvolverContato: string;
  proximosPassosEPrazo: string;
  vigencia: string;
  km_aereo: string;
  km_sub: string;
  data_previsao_protocolo: string;
  data_real_protocolo: string;
  protocolo: string;
  observacao_cliente: string
};

const questions = [
  { question: '2 - Qual o motivo da autarquia não protocolada?', key: 'motivoAutarquiaSemProtocolo' },
  { question: '3 - Qual o status do projeto na autarquia?', key: 'statusAutarquia' },
  { question: '4 - Qual o contato da autarquia?', key: 'contatoAutarquia' },
  { question: '5 - Qual a última interação com a autarquia? E qual o prazo para resposta?', key: 'ultimaInteracaoEPrazoResposta' },
  { question: '6 - É possível desenvolver algum contato com a autarquia?', key: 'desenvolverContato' },
  { question: '7 - Quais os próximos passos do processo e quais são os prazos?', key: 'proximosPassosEPrazo' },
  { question: '8 - Qual a vigência?', key: 'vigencia' },
];

export default function Home({ projetos }: { projetos: Projeto[] }) {
  const [projeto, setProjeto] = useState<Projeto>(projetos[0]);
  const [projectsToDownload, setProjectsToDownload] = useState<number[]>([]);
  const downloadButton = useRef<HTMLAnchorElement>(null);
  const handleProjeto = (id: number) => setProjeto(projetos.find((projeto) => projeto.id === id) as Projeto);

  function downloadWorkSheet() {
    const rows = [];

    for (let i = 0; i < projetos.length; i++) {
      const projeto = projetos[i];
      const projetoData = {
        id: projeto.id,
        descricao: projeto.descricao,
        data_acionamento: projeto.data_acionamento,
        cidade: projeto.cidade,
        estado: projeto.estado,
        data_previsao_licenca: projeto.data_previsao_licenca,
        data_real_licenca: projeto.data_real_licenca,
        cliente: projeto.cliente,
        prioridade: projeto.prioridade,
        // orgao: projeto.orgao,
      }

      for (let i = 0; i < projeto.autarquias.length; i++) {
        const autarquia = projeto.autarquias[i];
        const autarquiaData = {
          observacao_cliente: autarquia.observacao_cliente,
          nome: projeto.orgao,
          motivoAutarquiaSemProtocolo: autarquia.motivoAutarquiaSemProtocolo,
          statusAutarquia: autarquia.statusAutarquia,
          contatoAutarquia: autarquia.contatoAutarquia,
          ultimaInteracaoEPrazoResposta: autarquia.ultimaInteracaoEPrazoResposta,
          desenvolverContato: autarquia.desenvolverContato,
          proximosPassosEPrazo: autarquia.proximosPassosEPrazo,
          vigencia: autarquia.vigencia,
          km_aereo: autarquia.km_aereo,
          data_previsao_protocolo: autarquia.data_previsao_protocolo || '',
          data_real_protocolo: autarquia.data_real_protocolo?.split('T')[0] || '',
          protocolo: autarquia.protocolo,
        };

        const row = Object.values(projetoData).concat(Object.values(autarquiaData));
        rows.push(row);
      }
    }
    
    const filteredRows = rows.filter(row => projectsToDownload.includes(row[0] as number))
    const aoaData = [
      [
        'ID',
        'Descrição',
        'Data de acionamento',
        'Cidade',
        'Estado',
        'Data prevista de licença',
        'Data de licença',
        'Cliente',
        'Prioridade',
        'Observações do cliente',
        // 'Orgão',
        'Autarquias envolvidas',
        'Motivo de autarquia não protocolada',
        'Status do projeto na autarquia',
        'Contato da autarquia',
        'Ultima interação e prazo de resposta',
        'Possibilidade de desenvolver contato',
        'Próximos passos',
        'Vigência',
        'Metragem total',
        'Data prevista de protocolo',
        'Data de protocolo',
        'Protocolo',
      ],
      ...(filteredRows.length > 0 ? filteredRows : rows)
    ];

    const workBook = XLSX.utils.book_new();
    const workSheet = XLSX.utils.aoa_to_sheet(aoaData);
    XLSX.utils.book_append_sheet(workBook, workSheet, 'Licenças - demanda Infinitel');
    XLSX.writeFileXLSX(workBook, 'Licenças - demanda Infinitel.xlsx');
  }

  return (
    <div className='overflow-x-hidden'>
      <Head>
        <title>Infinitel: FAQ</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='-z-0 absolute top-0 inset-x-0 -rotate-45 h-1/3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-t-full blur-[150px] opacity-30' />

      <div className='z-20 flex flex-col items-center w-screen h-full min-h-screen bg-gradient-to-r from-[#171A24] to-[#121520] sm:to-zinc-900'>
        <header className='flex justify-center flex-initial w-full h-20 px-6 shadow-md bg-zinc-900/70'>
          <div className='flex items-center justify-between w-full h-full max-w-7xl'>
            <figure className='relative w-16 h-full'>
              <Image
                fill
                className='object-contain'
                src='https://infinitel-telecom.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-infinitel.10de69e9.png&w=640&q=75'
                alt='Infinitel'
              />
            </figure>
            <div className='flex items-center gap-5'>
              <h1 className='text-xl text-white font-matterSemibold'>FAQ</h1>
              <a
                ref={downloadButton}
                onClick={downloadWorkSheet}
                className='px-4 py-2 text-white transition-colors duration-300 bg-purple-500 cursor-pointer rounded-xl font-matterSemibold hover:bg-purple-700'
              >
                Baixar planilha
              </a>
            </div>
          </div>
        </header>
        
        <main className='z-10 flex flex-auto w-full max-w-7xl'>
          <div className='grid w-full grid-cols-5'>
            <Sidebar projetos={projetos.map((p) => p.id)} handleProjeto={handleProjeto} projectsToDownload={projectsToDownload} setProjectsToDownload={setProjectsToDownload} />
            <section className='flex flex-col col-span-4 gap-5 pt-10 pl-10'>
              <Title text='Informações' />
              <About projeto={projeto} />
              <Tabs
                autarquias={projeto.autarquias.map((autarquia) => {
                  return {
                    name: autarquia.nome,
                    faq: questions.map(({ question, key }) => {
                      return { question: question, answer: autarquia[key as keyof Autarquia] };
                    }),
                    about: {
                      km_aereo: autarquia.km_aereo,
                      data_previsao_protocolo: autarquia.data_previsao_protocolo,
                      data_real_protocolo: autarquia.data_real_protocolo,
                      protocolo: autarquia.protocolo,
                      observacao_cliente: autarquia.observacao_cliente
                    },
                  };
                })}
              />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`);
  const data = (await response.json()) as { projects: Projeto[] };
  const projetos = data['projects'].map((projeto) => projeto);

  return {
    props: {
      projetos,
    },
  };
};
