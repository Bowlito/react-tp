import { useRef, useState } from "react"

export default function Produit({ produit, setQuantity }) {

    let quantite = useRef(1)
    //let [disabled, setDisabled] = useState(true)

    let [disabled, setDisabled] = useState(false)

    function envoyer(){
        setQuantity(quantite.current.value)
        setDisabled(true)
    }

    // function disable(){
    //     setDisabled(!disabled)
    // }
    return (
        <>
            {produit.nom}, {produit.prix}€, {produit.quantite} pièces, 
            <input type="number" ref={quantite} placeholder="quantite" />
            <button onClick={envoyer} disabled={disabled}>Ajouter</button>
        </>
    )

}