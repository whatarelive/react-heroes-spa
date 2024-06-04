import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroById } from "../helpers";



export const HeroPage = () => {

  // Estraemos el id del heroe de los parametros de Url.
  const { id } = useParams();
  // Recibimos de vuelta el heroe que corresponde con el id.
  const heroe = useMemo(() => getHeroById( id ), [ id ]);
  
  // Creamos un objeto navigate para la navegacion de vuelta.
  const navigate = useNavigate();

  // Si hero === undefined: nos retorna a la pantalla inicial
  if ( !heroe ) 
    return <Navigate to={'/marvel'}/>
  
  // Funcion onClik del boton Regresar.
  const onClick = () => {
    // Comprobamos si el heroe pertenece a Marvel o Dc para saber a donde regresar.
    // const route = heroe.publisher == 'Marvel Comics' ? 'marvel' : 'dc';
    
    navigate(-1);
  }

  return (
    <div className="row mt-5">
         <div className="col-4">
          <img 
            src={`/${ heroe.id }.jpg`}
            alt={ heroe.superhero }
            className="img-thumbnail animate__animated animate__fadeInLeft"
          />
         </div>

          <div className="col-8">
            <h3>{ heroe.superhero }</h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"> <b>Alter ego: </b>{ heroe.alter_ego }</li>
              <li className="list-group-item"> <b>Publisher: </b>{ heroe.publisher }</li>
              <li className="list-group-item"> <b>First Appearence: </b>{ heroe.first_appearance }</li>
            </ul>

            <h5 className="mt-3">Chareacters</h5>
            <p>{ heroe.characters }</p>

            <button
              className="btn btn-outline-primary"
              onClick={ onClick }>
                Regresar
            </button>

          </div>
    </div>
  )
}
