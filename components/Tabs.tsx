import { Tab } from '@headlessui/react';
import classNames from '../utils/classNames';

type TabsProps = {
  autarquias: {
    name: string;
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
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {autarquia.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className='mt-2'>
          {autarquias.map(({ faq }, idx) => (
            <Tab.Panel key={idx} className='p-3 bg-white rounded-xl'>
              <ul>
                {faq.map(({ question, answer }) => (
                  <li key={question} className='relative p-3 rounded-md hover:bg-gray-100'>
                    <h3 className='text-lg leading-5 font-matterSemibold'>{question}</h3>
                    <p className='text-lg text-gray-600 font-matterRegular'>{answer}</p>
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
