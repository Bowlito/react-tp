import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <nav className="m-5 bg-darkblue">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Accueil</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/compteur">Compteur</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/calculette">Calculette</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/primeur">Primeur</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/clavier">Clavier</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/container">Conteneur</Link>
                </li>

            </ul>
        </nav>
    )
}