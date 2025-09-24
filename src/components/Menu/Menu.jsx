import { NavLink } from "react-router-dom";
import './Menu.css'

export default function Menu(){
    return(
        <nav className="m-5 bg-darkblue">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">Accueil</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/compteur">Compteur</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/calculette">Calculette</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/primeur">Primeur</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/panier">Panier</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/clavier">Clavier</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/container">Conteneur</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/personne">Personnes</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/tableau">Tableau</NavLink>
                </li>

            </ul>
        </nav>
    )
}