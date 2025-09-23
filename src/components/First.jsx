import { useContext, useRef, useState } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

export default function First() {

    const {ajouterTexte} = useContext(GlobalContext)

    const texte = useRef()

    function envoyer(){
        ajouterTexte(texte.current.value)
        texte.current.value = ''
    }
    
    
    return (
        <>
            <h3>First</h3>
            <div>
                <input type="text" placeholder="Texte" ref={texte}/>
                <button className="btn btn-success p-2 m-2" onClick={envoyer}> Ajouter </button>
            </div>
        </>
    )
}