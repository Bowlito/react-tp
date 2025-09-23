import Controls from "../components/Controls"
import { useEffect, useRef, useState } from "react"

export default function Compteur() {
    let [valeur, setValeur] = useState(0)
    let [signe, setSigne] = useState('nul')
    let [color, setColor] = useState('yellow')
    let pas = useRef(1)

    useEffect(() => {
        if (valeur > 0) {
            setSigne('positif')
            setColor('lightblue')
        } else if (valeur < 0) {
            setSigne('négatif')
            setColor('tomato')
        } else {
            setSigne('nul')
            setColor('yellow')
        }

    }, [valeur])

    useEffect(() => {
        pas.current.value = 1
    }, [])


    function decrementer() {

        setValeur(valeur - Number(pas.current.value))

    }
    function incrementer() {
        setValeur(valeur + Number(pas.current.value))

    }

    return (
        <div>

            <Controls decrementer={decrementer} incrementer={incrementer} />
            <div>
                Pas : <input type="number" ref={pas} />
            </div>

            <span style={{ color }}> {valeur}</span>

            <h2>Compteur : signe = {signe}</h2>
        </div>
    )
}