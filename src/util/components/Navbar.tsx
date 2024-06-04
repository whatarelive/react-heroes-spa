import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from "../../auth/context/AuthContext";


export const Navbar = () => {

    const navigate = useNavigate();
    const { state, logout } = useContext( AuthContext );    

    const onLogout = () => {
        logout();

        navigate('/login', { replace: true });
    }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
        <div className="container-fluid">
           
            <Link className="navbar-brand" to={'/*'}>Asociaciones</Link>
            
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    
                    <NavLink 
                        to={"/marvel"} 
                        className={({isActive}) => `nav-link ${ isActive ? 'active' : ''}`}> 
                    Marvel
                    </NavLink>

                    <NavLink 
                        to={"/dc"} 
                        className={({isActive}) => `nav-link ${ isActive ? 'active' : ''}`}> 
                    Dc
                    </NavLink>
                    <NavLink 
                        to={"/search"} 
                        className={({isActive}) => `nav-link ${ isActive ? 'active' : ''}`}> 
                    Search
                    </NavLink>
                </div>
            </div>
            
        </div>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
            <ul className="navbar-nav ml-auto">

                <span className="nav-item nav-link text-primary">
                    { state?.name }
                </span>

                <button className="nav-item nav-link btn"
                    onClick={ onLogout }>
                    Logout
                </button>

            </ul>
        </div>
  </nav>
  )
}
