import { Route, Routes } from "react-router-dom"
import Home from "../views/Home"
import Compteur from "../views/Compteur"
import Container from "../views/Container"
import Primeur from "../views/Primeur"
import Panier from "../views/Panier"
import Clavier from "../views/Clavier"
import Calculette from "../views/Calculette"
import OnOff from "../views/OnOff"
import About from "../views/About"
import Adresse from "../views/Adresse"
import Personne from "../views/Personne"
import PersonneDetails from "../views/PersonneDetails"
import Calcul from "../views/Calcul"
import Tableau from "../views/Tableau"
import ElementTableau from "../views/elementTableau"
import NotFound from "../views/NotFound/NotFound"
import Login from "../views/Login"
import PrivateRoute from "./PrivateRoute"
import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"





const AppRoutes = () => {
    const {isAuthenticated} = useContext(GlobalContext)
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/compteur" element={<Compteur />} />
            <Route path="/container" element={<Container />} />
            <Route path="/primeur" element={<Primeur />} />
            <Route path="/panier" element={<Panier />} />
            <Route path="/clavier" element={<Clavier />} />
            <Route path="/calculette" element={<Calculette />} />
            <Route path="/onoff" element={<OnOff />} />
            <Route path="/about" element={<About />} />
            <Route path="/adresse" element={<Adresse />} />
            <Route element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
                <Route path="/personne" element={<Personne />} />
                <Route path="/personne/:id" element={<PersonneDetails />} />
            </Route>
            <Route path="/calcul/:op" element={<Calcul />} />
            <Route path="/tableau/" element={<Tableau />} />
            <Route path="/tableau/:id" element={<ElementTableau />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />


        </Routes>
    )
}

export default AppRoutes