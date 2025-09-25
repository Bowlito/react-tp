import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function PersonneDetails() {
    

    const { id } = useParams()
    const navigate = useNavigate()

     

    const [personne, setPersonne] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/personnes/${id}`)
        .then(res => setPersonne(res.data))
    
    }, [])
    
    
    
    return (
        <div>
            <h2>Détails de la personne : {id}</h2>
            {!personne && <p>Cette personne n'existe pas</p>}
            {personne &&
                <ul>
                    <li>Nom : {personne.nom}</li>
                    <li>Prenom : {personne.prenom}</li>
                    <li>Age : {personne.age} ans</li>
                </ul>
            }
            <div>
                <button onClick={() => navigate('/personne')}>Retour à la liste des personnes</button>
            </div>
        </div>
    )
}