import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

export default function Second() {

    const {textes} = useContext(GlobalContext)

    return (
        <>
            <h3>Second</h3>
            <ul>
                {
                    textes.map((t, ind) => 
                        <li key={ind}>{t}</li>
                    )
                }
            </ul>
        </>
    )
}