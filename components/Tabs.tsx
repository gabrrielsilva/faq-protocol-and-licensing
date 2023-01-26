import { Tab } from '@headlessui/react';
import classNames from '../utils/classNames';
import { H3 } from './typography/H3';
import { Paragraph } from './typography/Paragraph';

type TabsProps = {
  autarquias: {
    name: string;
    about: {
      km_aereo: string,
      km_sub: string,
      data_previsao_protocolo: string,
      data_real_protocolo: string,
      protocolo: string,
    }
    faq: {
      question: string;
      answer: string;
    }[];
  }[];
};

export const Tabs = ({ autarquias }: TabsProps) => {  
  return (
    <div className='w-full'>
      <Tab.Group>
        <Tab.List className='flex p-1 space-x-1 rounded-xl bg-white/20'>
          {autarquias.map((autarquia) => (
            <Tab
              key={autarquia.name}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-matterSemibold leading-5 text-blue-700',
                  selected ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {autarquia.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className='mt-2'>
          {autarquias.map(({ faq, about }, idx) => (
            <Tab.Panel key={idx} className='p-3 bg-white rounded-xl'>
              <section className='grid w-full grid-cols-3 gap-5 px-3'>
                <div className='flex flex-col'> 
                  <H3 text='metragem total' /> 
                  <Paragraph text={(about.km_aereo || '-') + ' m'} />
                </div>
                {/* <div className='flex flex-col'> 
                  <H3 text='metragem subterrânea' /> 
                  <Paragraph text={(about.km_sub || '-') + ' m'} />
                </div> */}
                <div className='flex flex-col'> 
                  <H3 text='data prevista de protocolo' /> 
                  <Paragraph text={new Date(about.data_previsao_protocolo).toLocaleDateString('pt-BR')} />
                </div>
                <div className='flex flex-col'> 
                  <H3 text='data real de protocolo' /> 
                  <Paragraph text={new Date(about.data_real_protocolo).toLocaleString('pt-BR')} />
                </div>
                <div className='flex flex-col'> 
                  <H3 text='protocolo' /> 
                  <Paragraph text={about.protocolo || '-'} />
                </div>
              </section>
              <hr className='my-5' />
              <ul>
                {faq.map(({ question, answer }) => (
                  <li key={question} className='relative p-3 rounded-md hover:bg-gray-100'>
                    <H3 text={question} />
                    <Paragraph text={answer} />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
