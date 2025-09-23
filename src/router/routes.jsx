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

const AppRoutes = () => {
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

        </Routes>
    )
}

export default AppRoutes