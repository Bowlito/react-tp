import { useRef, useState } from "react"

export default function Produit({ produit, setQuantity }) {

    let quantite = useRef(1)
    //let [disabled, setDisabled] = useState(true)

    function envoyer(){
        setQuantity(quantite.current.value)
    }

    // function disable(){
    //     setDisabled(!disabled)
    // }
    return (
        <>
            {produit.nom}, {produit.prix}€, {produit.quantite} pièces, 
            <input type="number" ref={quantite} placeholder="quantite" />
            <button onClick={envoyer}>Ajouter</button>
        </>
    )

}