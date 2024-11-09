import ThemeToggler from "../components/ThemeToggler/ThemeToggler"
import { ThemeProvider } from "../hooks/ThemeContext"
import Header from "../components/Header/Header"

const Atividade2 = () => {

  return (

    <>

      <Header/>

      <div className='app'>
        <h1>Atividade 2.2</h1>

        <ThemeProvider>
          <ThemeToggler />
        </ThemeProvider>

      </div>

    </>

  )
}

export default Atividade2