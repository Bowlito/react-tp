import { useNavigate, useParams } from "react-router-dom";

export default function PersonneDetails() {
    const personnes = [
        { id: 1, nom: 'Wick', prenom: 'John', age: 45 },
        { id: 2, nom: 'Dalton', prenom: 'Jack', age: 40 },
        { id: 3, nom: 'Dupont', prenom: 'Sophie', age: 30 }
    ];

    const { id } = useParams()
    const navigate = useNavigate()

    const personne = personnes.find(p => p.id == id)
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