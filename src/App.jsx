import './App.css'
import Menu from './components/Menu'
import Header from './components/Header'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AppRoutes from './router/routes'

function App() {

  return (
    <>
      <Header/>
        <Menu />

      <AppRoutes />
    </>
  )
}

export default App
