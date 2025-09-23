import { createContext, useState } from "react";

export const GlobalContext = createContext()

const message = 'Hello, world!'

export const Provider = ({ children }) => {
    const [textes, setTextes] = useState([])
    const [lignesCommandes, setLignesCommandes] = useState([])
    function ajouterLigneCommande(lc) {
        setLignesCommandes(
            [...lignesCommandes, lc]
        )
    }


    function ajouterTexte(texte) {
        setTextes([...textes, texte])
    }

    return (
        <GlobalContext.Provider value={{ message, textes, ajouterTexte, lignesCommandes, ajouterLigneCommande }}>
            {children}
        </GlobalContext.Provider>
    )
}