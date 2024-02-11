//Importar el Outlet

import { Outlet, Link, useLocation } from "react-router-dom";
const Layout = () => {


  const location = useLocation()
  console.log(location)

  return (
    <div className="md:flex md:min-h-screen">
        <aside className="md:w-1/4 bg-tradewind_500 pe-5 py-10 shadow-xl">
            <h2 className="ms-5 text-center text-tradewind_50 font-bold text-4xl border-2 p-2 rounded-md border-tradewind_50 shadow-xl">CRM - Clientes</h2>

            <nav className="mt-10">

                <Link className={`${location.pathname === '/' ? 'shadow-xl bg-tradewind_100 text-tradewind_400 rounded-r-full' : 'text-tradewind_50'} block text-center text-2xl transition-opacity duration-300 hover:opacity-75 p-1`} to="/">Clientes</Link>


                <Link className={`${location.pathname === '/nuevoCliente' ? 'shadow-xl bg-tradewind_100 text-tradewind_400 rounded-r-full' : 'text-tradewind_50'} block text-center text-2xl transition-opacity duration-300 hover:opacity-75 p-1`} to="/nuevoCliente">NuevoCliente</Link>


            </nav>
        </aside>
        <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
            <Outlet />
        </main>
        
      {/* Lo que esta arriba del outlet es lo que se va a aplicar en todas las demas paginas */}
      
    </div>
  )
}

export default Layout
