// export default function Produit({ nom, prix, quantite }) {
//     return (
//         <>
//             {nom}, {prix}€, {quantite} pièces
//         </>
//     )

import { useRef, useState } from "react"
import Prix from "./Prix"


// }
export default function Produit({ produit, onSendQuantity }) {
    let qteReservee = useRef()
    let [disabled, setDisabled] = useState(false)
    function envoyer() {
        onSendQuantity(qteReservee.current.value)
        setDisabled(true)
    }
    return (
        <>
            {produit.nom},
            <Prix prixHt={produit.prix} />         ,
            {produit.quantite} pièces
            <input type="number" ref={qteReservee} />
            <button onClick={envoyer} disabled={disabled}  >
                Ajouter dans le panier
            </button>
        </>
    )

}