import { Link } from "react-router-dom";
import PersonneAdd from "../components/PersonneAdd";
import { useState } from "react";
import axios from '../../axios.config.js'
import { useEffect } from "react";

export default function Personne() {

    const [personnes, setPersonnes] = useState([ ]);
    const [erreur, setErreur] = useState()

    useEffect(() => {
        axios
            .get(`/personnes`)
            .then(res => setPersonnes(res.data))
            .catch(() => setErreur("Liste temporairement indisponible"))
    }, [])

    const ajouterPersonne = (user) => {


        setPersonnes([...personnes, user])

    }

    function supprimerUser(id) {
        axios
            .delete(`/personnes/${id}`)
            .then(()=> setPersonnes(personnes.filter(p => p.id != id)))
    }

    return (
        <div className="d-flex flex-column gap-5">
            <h2>Gestion des personnes</h2>

            <PersonneAdd onSendData={ajouterPersonne} />

            <h3>Liste des personnes</h3>
            <ul>
                {
                !erreur && 
                personnes.map((p, ind) =>
                    <li key={p.id}>{p.nom} {p.prenom}&nbsp;
                        <Link to={`/personne/${p.id}`}>
                            details
                        </Link>
                        &nbsp;
                        <button onClick={() => supprimerUser(p.id)}> Supprimer </button>
                    </li>
                )}
            </ul>

            {erreur && <p>{erreur}</p>}


        </div>
    )
}