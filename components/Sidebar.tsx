import { Title } from './Title'

type SidebarProps = {
  projetos: number[],
  handleProjeto: (id: number) => void
}

export const Sidebar = ({ projetos, handleProjeto }: SidebarProps) => {
  return (
    <aside className='col-span-1 py-10 border-r border-white/10'>
      <Title text='Projetos' />
      <section className='flex flex-col py-6'>
        {projetos?.map((projeto) => (
          <a onClick={() => handleProjeto(projeto)} key={projeto} className='text-lg text-white cursor-pointer font-matterRegular hover:text-blue-400'>ID {projeto}</a>
        ))}
      </section>
    </aside>
  )
}