import { Link } from "react-router-dom";

export default function Personne() {
    const personnes = [
        { id: 1, nom: 'Wick', prenom: 'John', age: 45 },
        { id: 2, nom: 'Dalton', prenom: 'Jack', age: 40 },
        { id: 3, nom: 'Dupont', prenom: 'Sophie', age: 30 }
    ];
    return (
        <div>
            <h2>Liste des personnes</h2>
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