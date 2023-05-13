import  { useState } from 'react'

const Navbar = () => {
const[isShowNav,setIsShowNav]=useState(false)
const handleShowNav=()=>{
setIsShowNav(!isShowNav)
}
  return (
    <header className="flex justify-between py-4 px-2 text-2xl text-orange-300 bg-sky-950 items-center relative md:px-4 md:py-0">
      <h1 className="font-[Caveat] font-black ">Daniel Moreno</h1>
      <i onClick={handleShowNav} className='bx bx-menu-alt-right text-orange-300 text-3xl cursor-pointer md:hidden'></i>
      <nav className={`text-orange-300 absolute top-full ${isShowNav?"left-0":"-left-full"} bg-sky-950 w-full grid text-lg gap-2 duration-200 md:static md:flex md:w-auto`}>
        <a href="#" className='hover:bg-orange-300 p-4 hover:text-sky-900 duration-200 pl-2'>Experiencia</a>
        <a href="#" className='hover:bg-orange-300 p-4 hover:text-sky-900 duration-200 pl-2'>Proyectos</a>
        <a href="#" className='hover:bg-orange-300 p-4 hover:text-sky-900 duration-200 pl-2'>Contacto</a>
      </nav>
    </header>
  )
}

export default Navbar

