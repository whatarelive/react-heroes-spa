import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { HeroesApp } from './HeroesApp'

const root = document.getElementById('root');

if ( root instanceof HTMLDivElement ) {
  
    ReactDOM.createRoot( root ).render(
      <React.StrictMode>
        <BrowserRouter>
          <HeroesApp />
        </BrowserRouter>
      </React.StrictMode>
    )
}
