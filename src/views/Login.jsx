import { useContext } from "react"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../contexts/GlobalContext"

export default function Login() {
    const { setIsAuthenticated } = useContext(GlobalContext)
    const username = useRef()
    const password = useRef()
    const navigate = useNavigate()

    function connexion(event) {
        event.preventDefault()
        if (username.current.value == 'admin' && password.current.value == 'admin') {
            localStorage.setItem('username', username.current.value)
            localStorage.setItem('password', password.current.value)
            setIsAuthenticated(true)
            navigate('/personne')
            console.log('Connexion réussie');

        }


    }
    return (
        <div>
            <h2>Connexion</h2>
            <form onSubmit={connexion}>
                <div>
                    Nom d'utilisateur
                    <input type="text" ref={username} />
                </div>
                <div>
                    Mot de passe
                    <input type="text" ref={password} />
                </div>

                <button>Connexion</button>
            </form>
        </div>
    )
}