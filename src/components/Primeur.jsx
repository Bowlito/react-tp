
import { useRef, useEffect, useState, createContext } from "react"
import Produit from "./Produit"

export const TvaContext = createContext(0.2)

export default function Primeur() {
    let [produits, setProduits] = useState([
        { nom: "banane", prix: 3, quantite: 10 },
        { nom: "fraise", prix: 10, quantite: 20 },
        { nom: "poivron", prix: 5, quantite: 10 }
    ])

    let nom = useRef()
    let prix = useRef()
    let quantite = useRef()

    let [total, setTotal] = useState(0)

    function afficherTotal(valeur, ind) {

        setTotal(total + valeur * produits[ind].prix)
        console.log(valeur, ind);


    }

    function addProduct() {
        setProduits([...produits,
        { nom: nom.current.value, prix: prix.current.value, quantite: quantite.current.value }
        ])

    }

    return (
        <>
            <h2>Primeur</h2>
            <h3>Prix total : {total}€ HT </h3>
            <div>
                <label htmlFor="Nom"> Nom </label>
                <input type="text" ref={nom} />
                <br />
                <label htmlFor="Prix" > Prix </label>
                <input type="number" ref={prix} />
                <br />
                <label htmlFor="Quantite" > Quantité </label>
                <input type="number" ref={quantite} />
                <div>
                    <button onClick={addProduct}>Ajouter le produit</button>
                </div>
            </div>
            <ul>
                {
                    produits.map((p, ind) =>
                        <li key={p.nom}>
                            <Produit produit={p} setQuantity={(valeur) => afficherTotal(valeur, ind)} />
                        </li>
                    )

                }
            </ul>
        </>
    )
}