import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Menu from './components/Menu/Menu'
import Header from './components/Header'
import AppRoutes from './router/AppRoutes'

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
