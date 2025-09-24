import { createContext, useState } from "react";

export const GlobalContext = createContext()

const message = 'Hello, world!'

export const Provider = ({ children }) => {
    const [textes, setTextes] = useState([])
    const [lignesCommandes, setLignesCommandes] = useState([])
    const [qteProduit, setQteProduit] = useState(0)
    function ajouterLigneCommande(lc) {
        setLignesCommandes(
            [...lignesCommandes, lc]
        )
    }
    function supprimerLigneCommande(ind) {
        let data = lignesCommandes
        data.splice(ind, 1)
        setLignesCommandes(
            [...data]
        )
    }


    function ajouterTexte(texte) {
        setTextes([...textes, texte])
    }

    function ajouterQte (qte) {
        setQteProduit(qte + 1)
    }

    return (
        <GlobalContext.Provider value={{ message, textes, qteProduit, ajouterQte, ajouterTexte, lignesCommandes, ajouterLigneCommande, supprimerLigneCommande }}>
            {children}
        </GlobalContext.Provider>
    )
}