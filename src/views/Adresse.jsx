import { useState } from "react"
import { useSearchParams } from "react-router-dom"

export default function () {
    const [searchParams, setSearchParams] = useSearchParams()
    console.log(searchParams);
    
    const cp = searchParams.get('cp')
    const ville = searchParams.get('ville')
    return(
       <div>
        <h2>Adresse</h2>
        <ul>
            <li>Code postal : {cp}</li>
            <li>Ville : {ville}</li>
        </ul>
        <button onClick={()=> setSearchParams({cp: '59000', ville: 'Lille'})}>
            Visitez Lille
        </button>
       </div>
    )
}