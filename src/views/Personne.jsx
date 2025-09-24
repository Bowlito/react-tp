import { Link } from "react-router-dom";
import PersonneAdd from "../components/PersonneAdd";
import { useState } from "react";

export default function Personne() {

    const [personnes, setPersonnes] = useState([
        { id: 1, nom: 'Wick', prenom: 'John', age: 45 },
        { id: 2, nom: 'Dalton', prenom: 'Jack', age: 40 },
        { id: 3, nom: 'Dupont', prenom: 'Sophie', age: 30 }
    ]);

    const ajouterPersonne = (user) => {
        
        user.id = personnes.length + 1
        
        
        setPersonnes([...personnes, user])
        
    }

    return (
        <div className="d-flex flex-column gap-5">
            <h2>Gestion des personnes</h2>

            <PersonneAdd onSendData={ajouterPersonne}/>

            <h3>Liste des personnes</h3>
            <ul>
                {personnes.map((p, ind) =>
                    <li key={ind}>{p.nom} {p.prenom}&nbsp;
                        <Link to={`/personne/${p.id}`}>
                            details
                        </Link>
                    </li>
                )}
            </ul>


        </div>
    )
}