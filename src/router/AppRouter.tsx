import { Routes, Route } from "react-router-dom";
import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";
import { PrivateRouter, PublicRouter } from './';


export const AppRouter = () => {

  return (
    <>
      <Routes>
          {/* Ruta para la página de inicio de sesión */}
          <Route path="/login" element={ 
            <PublicRouter>
              <LoginPage/>
            </PublicRouter>
          }/>

          {/* Ruta para todas las demás páginas */}
          <Route path="/*" element={
            <PrivateRouter>
              <HeroesRoutes/>
            </PrivateRouter>
          }/>
      </Routes>
    </>
  )
}
