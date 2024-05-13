import { Route, Routes, Navigate } from "react-router"  // ELementos de React Router.
import { Navbar } from "../../ui"  // Barra de Navegacion.
import { MarvelPage, DcPage, HeroPage, SearchPage } from "../../heroes"  // Screens



// Router de Modulo de los Heroes:
export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />

        <div className="container">
            <Routes>
                <Route path="/marvel" element={ <MarvelPage/> } />
                <Route path="/dc" element={ <DcPage/> }/>

                <Route path="/search" element={ <SearchPage/> }/>
                <Route path="hero/:id" element={ <HeroPage/> }/>

                <Route path="/" element={ <Navigate to='/marvel' /> }/>
            </Routes>
        </div>
    </>
  )
}
