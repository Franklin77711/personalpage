import React, {createContext, useState, PropsWithChildren} from "react";

interface ThemeContextProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "",
  setTheme: () => {},
});

export const ThemeProvider: React.FC<PropsWithChildren<{}>> = ({
    children,
  }: PropsWithChildren<{}>) => {
    const [theme, setTheme] = useState<string>('hogwarts');

    return <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>    
}