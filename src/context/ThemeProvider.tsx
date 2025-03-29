import {createContext,useContext,useEffect,useState} from 'react'

const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: () => {}
});


const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };


    
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider

// Custom Hook to use ThemeContext
export const useTheme = () => useContext(ThemeContext);