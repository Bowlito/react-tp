import { createContext, useState } from "react";

export const GlobalContext = createContext()

const message = 'Hello, world!'

export const Provider = ({ children }) => {
    const [textes, setTextes] = useState([])
    const [lignesCommandes, setLignesCommandes] = useState([])
    const [isAuthenticated, setIsAuthenticated] = useState(false || localStorage.getItem('username'))
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

    return (
        <GlobalContext.Provider value={{ message, textes, ajouterTexte, lignesCommandes, ajouterLigneCommande, supprimerLigneCommande, isAuthenticated, setIsAuthenticated }}>
            {children}
        </GlobalContext.Provider>
    )
}