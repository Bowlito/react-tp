import { Link } from "react-router-dom";
import PersonneAdd from "../components/PersonneAdd";
import { useState } from "react";
import axios from 'axios'
import { useEffect } from "react";

export default function Personne() {

    const [personnes, setPersonnes] = useState([
        // { id: 1, nom: 'Wick', prenom: 'John', age: 45 },
        // { id: 2, nom: 'Dalton', prenom: 'Jack', age: 40 },
        // { id: 3, nom: 'Dupont', prenom: 'Sophie', age: 30 }
    ]);

    useEffect(() => {
        // axios({
        //     url: `http://localhost:3000/personnes`,
        //     method: 'GET'
        // })
        // .then(res => setPersonnes(res.data))
        axios
            .get(`http://localhost:3000/personnes`)
            .then(res => setPersonnes(res.data))
    }, [])

    const ajouterPersonne = (user) => {


        setPersonnes([...personnes, user])

    }

    function refreshComponent() {
        axios
            .get(`http://localhost:3000/personnes`)
            .then(res => setPersonnes(res.data))
    }

    function supprimerUser(id) {
        axios
            .delete(`http://localhost:3000/personnes/${id}`)
            .then(refreshComponent)
    }

    return (
        <div className="d-flex flex-column gap-5">
            <h2>Gestion des personnes</h2>

            <PersonneAdd onSendData={ajouterPersonne} />

            <h3>Liste des personnes</h3>
            <ul>
                {personnes.map((p, ind) =>
                    <li key={p.id}>{p.nom} {p.prenom}&nbsp;
                        <Link to={`/personne/${p.id}`}>
                            details
                        </Link>
                        <button onClick={() => supprimerUser(p.id)}> Supprimer </button>
                    </li>
                )}
            </ul>


        </div>
    )
}