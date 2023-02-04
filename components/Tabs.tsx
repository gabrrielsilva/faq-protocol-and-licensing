import { Tab } from '@headlessui/react';
import classNames from '../utils/classNames';
import { H3 } from './typography/H3';
import { Paragraph } from './typography/Paragraph';

type TabsProps = {
  autarquias: {
    name: string;
    about: {
      km_aereo: string,
      data_previsao_protocolo: string,
      data_real_protocolo: string,
      protocolo: string,
      observacao_cliente: string,
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
                  'w-full rounded-lg py-2.5 text-[16px] font-matterSemibold leading-5 text-blue-600',
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
                  <H3 text='Metragem total' /> 
                  <Paragraph text={(about.km_aereo || '-') + ' m'} />
                </div>
                {/* <div className='flex flex-col'> 
                  <H3 text='metragem subterrânea' /> 
                  <Paragraph text={(about.km_sub || '-') + ' m'} />
                </div> */}
                <div className='flex flex-col'> 
                  <H3 text='Data prevista de protocolo' /> 
                  <Paragraph text={about.data_previsao_protocolo ? about.data_previsao_protocolo.substring(8, 10) + '/' + about.data_previsao_protocolo.substring(5, 7) + '/' + about.data_previsao_protocolo.substring(0, 4) : ''} />
                </div>
                <div className='flex flex-col'> 
                  <H3 text='Data real de protocolo' /> 
                  <Paragraph text={about.data_real_protocolo ? about.data_real_protocolo.substring(8, 10) + '/' + about.data_real_protocolo.substring(5, 7) + '/' + about.data_real_protocolo.substring(0, 4) : ''} />
                </div>
                <div className='flex flex-col'> 
                  <H3 text='Protocolo' /> 
                  <Paragraph text={about.protocolo || '-'} />
                </div>
                <div className='flex flex-col col-span-2'> 
                  <H3 text='Observações' /> 
                  <Paragraph text={about.observacao_cliente || '-'} />
                </div>
              </section>
              <hr className='my-5' />
              <ul className='grid grid-cols-2'>
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
