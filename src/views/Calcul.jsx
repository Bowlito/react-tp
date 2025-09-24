import { useParams, useSearchParams } from "react-router-dom"

export default function Calcul() {

    const calculs = [
        { op: 'plus', signe: '+' },
        { op: 'moins', signe: '-' },
        { op: 'fois', signe: '*' },
        { op: 'div', signe: '/' },
    ]
    const { op } = useParams()
    const calcul = calculs.find(c => c.op == op)

    const [searchParams, setSearchParams] = useSearchParams()
    const valeur1 = Number(searchParams.get('valeur1'))
    const valeur2 = Number(searchParams.get('valeur2'))
    let erreur = "Opérateur invalide"
    let resultat = null
    function doTheMath(valeur1, valeur2) {




        switch (op) {
            case 'plus':
                resultat = valeur1 + valeur2
                return resultat

            case 'moins':
                resultat = valeur1 - valeur2
                return resultat
            case 'div':
                resultat = valeur1 / valeur2
                return resultat
            case 'fois':
                resultat = valeur1 * valeur2
                return resultat

            default:
                return erreur
        }

    }

    return (

        <div>
            <h2>Calcul</h2>
            {erreur && <p>{erreur}</p>}
            {resultat &&

                <span>{valeur1} {calcul.signe} {valeur2} = {doTheMath(valeur1, valeur2)}</span>

            }

        </div>
    )
}