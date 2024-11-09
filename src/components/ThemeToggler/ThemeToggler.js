import { useTheme } from "../../hooks/ThemeContext"

const ThemeToggler = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
            <p>Tema atual: {theme}</p>
            <button onClick={toggleTheme}>Alternar Tema</button>
        </div>
    )
}

export default ThemeToggler