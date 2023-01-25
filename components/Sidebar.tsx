import { useState } from 'react'
import { Title } from './Title'

type SidebarProps = {
  projetos: number[],
  handleProjeto: (id: number) => void
}

export const Sidebar = ({ projetos, handleProjeto }: SidebarProps) => {
  const [searched, setSearch] = useState('');
  let searchedProjetos = searched.length > 0 ? projetos.filter(project => project.toString().includes(searched)) : undefined;

  return (
    <aside className='col-span-1 py-10 border-r border-white/10'>
      <div className='relative flex items-end justify-between'>
        <Title text='Projetos' />
        <input 
          type="text" 
          onChange={(e) => setSearch(e.target.value)} 
          className='w-32 h-10 p-0 mr-3 mb-1 text-[16px] text-white bg-transparent border-0 border-b-2 border-white placeholder:font-matterRegular focus:outline-none focus:ring-0' 
          placeholder='Pesquisar' 
        />
      </div>
      <section className='flex flex-col py-6'>
        {(searchedProjetos || projetos)?.map((projeto) => (
          <a onClick={() => handleProjeto(projeto)} key={projeto} className='text-lg text-white cursor-pointer font-matterRegular hover:text-blue-400'>ID {projeto}</a>
        ))}
      </section>
    </aside>
  )
}