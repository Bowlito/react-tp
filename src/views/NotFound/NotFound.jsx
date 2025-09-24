import { useLocation } from 'react-router-dom'
import './NotFound.css'
import { Helmet } from 'react-helmet'

export default function NotFound(){
    const location = useLocation()
    return(
        
        <div className="erreur">

            <h2>Page d'erreur</h2>
            <p>404 : La page demandée '{location.pathname}' n'existe pas</p>
        </div>
    )
}