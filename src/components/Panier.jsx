import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

export default function Panier() {
    const { lignesCommandes, supprimerLigneCommande } = useContext(GlobalContext)
    return (
        <div>
            <h2>Panier</h2>
            <ul>
                {
                    lignesCommandes.map((lc, ind) =>
                        <li key={ind}>{lc.produit.nom}, {lc.produit.prix}€ {lc.qteReservee}
                            <button onClick={() => supprimerLigneCommande(ind)}>supprimer</button>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}