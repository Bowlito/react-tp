import { useState } from "react"
import Touche from "./Touche"

const Clavier = () => {
    let lettres = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y',
        'z']
    let [display, setDisplay] = useState('')

    return (
        <div>
            <h2>Clavier virtuel</h2>
            <textarea defaultValue={display}></textarea>
            <div>
                {
                    lettres.map(lettre =>
                        <Touche key={lettre} lettre={lettre} onSendLetter={() => setDisplay(display + lettre)}/>
                    )
                }
            </div>
        </div>
    )
}

export default Clavier