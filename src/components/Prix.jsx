import { useContext } from "react"
import { TvaContext } from "./Primeur"

export default function Prix({prix }) {

    const TVA = useContext(TvaContext)
    return (

        <div>
            
            <span>Prix HT : {prix}€ </span>
            <span>Prix TTC : {(1 + TVA) * prix}€</span>
        </div>
    )
}