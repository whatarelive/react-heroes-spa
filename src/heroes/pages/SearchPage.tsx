import React from "react";
import { useLocation, useNavigate } from "react-router";
import { useForm } from "../../util/hooks/useForm";
import { getHeroByName } from "../helpers";
import { HeroCard } from "../components";
import queryString from "query-string";


export const SearchPage = () => {

  // Usamos el useNavigate para tener una forma de navegar. 
  const navigate = useNavigate();
  // Usamos el useLocation para extraer el valor de busquedad del query params 
  const location = useLocation();

  // Usamos la biblioteca queryString para facilitar el trabjo con el query param.
  const { q = '' } = queryString.parse( location.search );
  const heroes = getHeroByName( q as string );

  const showSearch = ((q as string).length === 0);
  const showError  = ((q as string).length > 0) && heroes.length == 0; 

  // Se usa el custom hook useForm para manejar el comportamiento del input.
  const { searchText, onInputChange, onResetForm } = useForm({ searchText: (q as string) });

  // Función de control del formulario que va ejecutar la navegación de busqueda.
  const handleSubmit = ( event: React.FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    
    if ( searchText.trim().length < 1 ) return;
    
    navigate(`?q=${ searchText?.toLowerCase().trim() }`)
  }

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form onSubmit={ handleSubmit }>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control" 
              name="searchText"
              value={ searchText }
              autoComplete="off"
              onChange={ onInputChange }
              onReset={ onResetForm } 
            />

            <button className="btn btn-outline-primary mt-3">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className="alert alert-primary animate__animated animate__fadeIn" style={{ display: showSearch ? '' : 'none' }}>
            Search a Hero
          </div>

          <div aria-label="alert-error" className="alert alert-danger animate__animated animate__fadeIn" style={{ display: showError ? '' : 'none' }}>
            No hero with <b>{ q }</b>
          </div>

          {
            heroes.map( heroe => <HeroCard key={ heroe.id } hero={ heroe }/>)
          }
        </div>
      </div>
    </>
  )
}
