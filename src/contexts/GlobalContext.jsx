import { createContext, useState } from "react";

export const GlobalContext = createContext()

const message = 'Hello, World!'


export const Provider = ({ children }) => {
    
    const [textes, setTextes] = useState([])

    function ajouterTexte(texte){
        setTextes([...textes, texte])
    }

    return(
        <GlobalContext.Provider value={{message, textes, ajouterTexte}}>
            {children}
        </GlobalContext.Provider>
    )
}