import Controls from "./Controls"
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
        //getSigne(valeur - 1)
    }
    function incrementer() {
        setValeur(valeur + Number(pas.current.value))
        //getSigne(valeur + 1)
    }


    return (
        <div>
            <div>
                Pas : <input type="number" ref={pas} />
            </div>


            <Controls decrementer={decrementer} incrementer={incrementer} />

            <span style={{ color }}> {valeur}</span>

            <h2>Compteur : signe = {signe}</h2>
        </div>
    )
}