import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function ElementTableau() {
    const navigate = useNavigate()
    const numbers = [
        2,
        3,
        8,
        1
    ]



    let { id } = useParams()

    // Permet de boucler sur un tableau en navigant vers l'avant
    //const next = (Number(id) + 1) % numbers.length

    if (id >= numbers.length) {
        id = 0
    }
    if (id < 0) {
        id = numbers.length - 1
    }


    return (
        <div>
            <h2>Element : {Number(id) + 1} </h2>
            <p>{numbers[Number(id)]}</p>

            <div className="gap-2">
                <Link to={`/tableau/${Number(id) - 1}`}> Précédent </Link>
                <Link to={`/tableau/${Number(id) + 1}`}> Suivant </Link>
            </div>
            <div>
                <button onClick={() => navigate(`/tableau/${Number(id) - 1}`)}> Précédent</button>
                <button onClick={() => navigate(`/tableau/${Number(id) + 1}`)}> Suivant</button>
            </div>

        </div>
    )
}