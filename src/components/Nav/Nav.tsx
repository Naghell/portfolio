const Nav = () => {
    return(
        <nav className="px-6 py-6 flex justify-between place-items-center">
            <h1>RLB</h1>
            <ol className="list-none flex">
                <li className="mx-2"><a href="#home">Inicio</a></li>
                <li className="mx-2"><a href="#about">Sobre mi</a></li>
                <li className="mx-2"><a href="#proyects">Proyectos</a></li>
                <li className="mx-2"><a href="#contact">Contacto</a></li>
            </ol>
            <button>DARK</button>
        </nav>
    )
}

export default Nav;