// import Produit from "./Produit"

// export default function Primeur() {
//     let produits = [
//         { nom: "banane", prix: 3, quantite: 10 },
//         { nom: "fraise", prix: 10, quantite: 20 },
//         { nom: "poivron", prix: 5, quantite: 10 }
//     ]
//     return (
//         <>
//             <h2>Primeur</h2>
//             <ul>
//                 {
//                     produits.map(p =>
//                         <li key={p.nom}>
//                             <Produit {...p} />
//                         </li>
//                     )
//                 }
//             </ul>
//         </>
//     )
// }
import { createContext, useContext, useRef, useState } from "react"
import Produit from "./Produit"
import { GlobalContext } from "../contexts/GlobalContext"
const TVA = 0.2
export const TvaContext = createContext(TVA)

export default function Primeur() {
    const { ajouterLigneCommande } = useContext(GlobalContext)
    let [produits, setProduits] = useState([
        { nom: "banane", prix: 3, quantite: 10 },
        { nom: "fraise", prix: 10, quantite: 20 },
        { nom: "poivron", prix: 5, quantite: 10 }
    ])
    let [total, setTotal] = useState(0)
    let nom = useRef()
    let prix = useRef()
    let quantite = useRef()
    // const TVA = 0.2


    const ajouter = () => {
        setProduits([
            ...produits,
            { nom: nom.current.value, prix: prix.current.value, quantite: quantite.current.value }
        ])
    }
    const calculerTotal = (qteReservee, ind) => {
        console.log(qteReservee, ind);
        setTotal(total + qteReservee * produits[ind].prix)
        ajouterLigneCommande({ produit: produits[ind], qteReservee })
    }
    return (
        <>
            <h2>Primeur : total = {total}€ HT</h2>
            <div>
                <h3>Nouveau produit</h3>
                <input type="text" ref={nom} placeholder="Nom" />
                <input type="number" ref={prix} placeholder="Prix" />€
                <input type="number" ref={quantite} placeholder="Quantité" />Pièces
                <button onClick={ajouter}>
                    Ajouter
                </button>
            </div>
            <ul>
                {
                    produits.map((p, ind) =>
                        <li key={p.nom}>
                            <Produit
                                // tva={TVA}
                                produit={p}
                                onSendQuantity={(qteReservee) => calculerTotal(qteReservee, ind)}
                            />
                        </li>
                    )
                }
            </ul>
        </>
    )
}