import { use, useRef, useState } from "react"

export default function OnOff() {

    let [isOff, setIsOff] = useState('true')
    let [texte, setTexte] = useState('')
    let valeur = useRef('Bonjour')

    function captureTexte(event) {
        setTexte(event.target.value)
    }

    function switchIt() {
        setIsOff(!isOff)
    }



    return (
        <>
            <button onClick={switchIt} disabled={isOff}>{!isOff ? 'On' : 'Off'}</button>
            <button onClick={switchIt} disabled={!isOff}>{isOff ? 'On' : 'Off'}</button>
            <div>
                <input type="text" value={texte} name="texte" id="texte" onInput={captureTexte} />
                <button onClick={() => alert(texte)}>Alerte</button>
            </div>
            <div>
                <input type="text" ref={valeur} name="valeur" id="valeur" />
                <button onClick={() => alert(valeur.current.value)}>Alerte</button>
            </div>
        </>
    )
}