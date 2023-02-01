import { Dispatch, SetStateAction, useState } from 'react'
import { Title } from './Title'

type SidebarProps = {
  projetos: number[],
  handleProjeto: (id: number) => void
  projectsToDownload: number[],
  setProjectsToDownload: Dispatch<SetStateAction<number[]>>
}

export const Sidebar = ({ projetos, handleProjeto, projectsToDownload, setProjectsToDownload }: SidebarProps) => {
  const [searched, setSearch] = useState('');
  let searchedProjetos = searched.length > 0 ? projetos.filter(project => project.toString().includes(searched)) : undefined;

  function handleProjectsToDownload(id: number) {
    if (projectsToDownload.includes(id)) {
      setProjectsToDownload(projectsToDownload.filter(project => project !== id))
    } else {
      projectsToDownload.push(id);
    }
  }

  return (
    <aside className='col-span-1 py-10 border-r border-white/10'>
      <div className='relative flex items-end justify-between -mt-4'>
        <Title text='Projetos' />
        <input 
          type="text" 
          onChange={(e) => setSearch(e.target.value)} 
          className='w-32 h-10 p-0 mr-3 mb-1 text-[16px] text-white bg-transparent border-0 border-b-2 border-white placeholder:font-matterRegular focus:outline-none focus:ring-0' 
          placeholder='Pesquisar' 
        />
      </div>
      <section className='flex flex-col gap-3 py-6 mr-2 -mt-1'>
        {(searchedProjetos || projetos)?.map((projeto) => (
          <div onClick={() => handleProjeto(projeto)} key={projeto} className='flex items-center justify-between w-full p-2 px-6 bg-white rounded-lg cursor-pointer'>
            <a className='text-lg text-blue-600 font-matterSemibold'>ID {projeto}</a>
            <input type="checkbox" onChange={() => handleProjectsToDownload(projeto)} />
          </div>
        ))}
      </section>
    </aside>
  )
}