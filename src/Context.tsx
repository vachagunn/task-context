import { ReactElement, useContext, createContext } from 'react';

type Theme = 'light' | 'dark';

const ThemeContext = createContext<Theme>('light');

export function ThemeProvider(props: { theme: Theme; children: ReactElement }) {
    return (
        <ThemeContext.Provider value={props.theme}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export function useTheme(): Theme {
    const value = useContext(ThemeContext);
    return value;
}
