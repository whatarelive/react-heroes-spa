import { AuthProvider } from "./auth/context/AuthProvider"
import { AppRouter } from "./router/AppRouter"


// Punto de entrada de la aplicacion.
export const HeroesApp = () => {

  return (
    <AuthProvider>
      <AppRouter/>
    </AuthProvider>
  )
}
