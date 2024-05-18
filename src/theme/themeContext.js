// ThemeContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Appearance } from 'react-native';
import { lightTheme, darkTheme } from './themes';

const ThemeContext = createContext({
  name: 'dark',
  theme: darkTheme,  // Default theme
  toggleTheme: () => {}
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme);

  useEffect(() => {
    const listener = ({ colorScheme }) => {
      setTheme(colorScheme === 'dark' ? darkTheme : lightTheme);
    };

    const subscription = Appearance.addChangeListener(listener);
    return () => subscription.remove();
  }, []);

  const toggleTheme = () => {
    console.log('theme changed')
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
