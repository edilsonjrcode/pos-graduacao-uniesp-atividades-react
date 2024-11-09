import ThemeToggler from "../components/ThemeToggler/ThemeToggler"
import { ThemeProvider } from "../hooks/ThemeContext"

const Atividade2 = () => {

    return (
    <div className='app'>

      <h1>Atividade 2.1</h1>
      
      <ThemeProvider>
        <ThemeToggler/>
      </ThemeProvider>

    </div>
)}

export default Atividade2