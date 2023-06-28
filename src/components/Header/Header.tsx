const Header = () => {
    return (
        <main className="bg-slate-700 h-screen overflow-hidden">
            <div className="flex justify-center place-items-center">
                <h1 className="text-slate-200 text-6xl absolute top-[175px] left-[50px]">Renzo Luis Battaglino</h1>
                <h2 className="text-slate-200 text-4xl absolute top-[235px] left-[50px] w-[400px]">Full Stack Developer</h2>
            </div>
            <img className="w-screen" src='./top.svg'></img>
        </main>
    )
}

export default Header