import { useNavigate } from "react-router-dom"

export default function Tableau() {
    const navigate = useNavigate()
    const numbers = [
        2,
        3,
        8,
        1
    ]
    return (
        <div>
            
            <div className="container">
                <div className="row">
                    <h2>Tableau</h2>
                </div>
                {numbers.map((n, ind)=>
                    <div className="col-mb-4 p-2 gap-2" key={ind}> {n}
                        <button onClick={() => navigate(`/tableau/${ind}`)}> Voir cet élément</button>
                    </div>
                )}
            </div>
        </div>
    )
}