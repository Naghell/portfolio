const Nav = () => {
    return(
        <nav className="px-6 py-6 flex justify-end place-items-center absolute w-[100%]">
            <ol className="list-none flex text-slate-200">
                <li className="mx-2"><a href="#home">Inicio</a></li>
                <li className="mx-2"><a href="#about">Sobre mi</a></li>
                <li className="mx-2"><a href="#proyects">Proyectos</a></li>
                <li className="mx-2"><a href="#contact">Contacto</a></li>
            </ol>
        </nav>
    )
}

export default Nav