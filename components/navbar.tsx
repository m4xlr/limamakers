import Link from 'next/link'
export default function Navbar(){
    return(
        
    <nav className="bg-transparent dark:bg-gray-800">
    <div className="container px-6 py-3 mx-auto md:flex">
        <div className="flex items-center justify-between">
            <div>
                <a className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="#">LIMA Makers</a>
            </div>
            
            
            <div className="flex md:hidden">
                <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                        <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                    </svg>
                </button>
            </div>
        </div>


        <div className="w-full md:flex md:items-center md:justify-between">
        <div className="relative">
            </div>
            <div className="flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0">
                <Link href="/">
                <a className="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-red-600 hover:text-gray-50 md:mx-2">Inicio</a>
                </Link>
                <Link href="/people">
                <a className="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-red-600 hover:text-gray-50 md:mx-2">Personas</a>
                </Link>
                <Link href="/projects">
                <a className="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-red-600 hover:text-gray-50 md:mx-2">Proyectos</a>
                </Link>
                <Link href="/labs">
                <a className="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-red-600 hover:text-gray-50 md:mx-2">Labs</a>
                </Link>
                <Link href="/factory">
                <a className="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-red-600 hover:text-gray-50 md:mx-2">Factory</a>
                </Link>
                <Link href="/store">
                <a className="px-2 py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-red-600 hover:text-gray-50 md:mx-2">Tienda</a>
                </Link>
            </div>
            
        </div>
    </div>
</nav>
    )
}