import { Link } from "react-router-dom";
import { Characters, Heroe } from "../types/Types"



const CaractersByHero = ({ alter_ego, characters }: Characters) =>{ 
  return ( alter_ego === characters ) 
    ? <></> 
    : <p>{ characters }</p>; 
}

export const HeroCard = ({ hero }:{ hero: Heroe } ) => {
  
  const img = `/heroes/${  hero.id }.jpg`;
  


  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">

        <div className="row no-gutters">
          <div className="col-4">
            <img src={ img } className="card-img"></img>
          </div>

          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{ hero.superhero }</h5>
              <p className="card-text">{ hero.alter_ego }</p>

              <CaractersByHero alter_ego={ hero.alter_ego } characters={ hero.characters }/>

              <p className="card-text">
                <small className="text-muted">{ hero.first_appearance }</small>
              </p>

              <Link to={`/hero/${ hero.id }`}>Mas...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
