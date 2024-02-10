import { createContext, useContext } from "react";

export const MovieContext = createContext();
export const ThemeContext = createContext();

export const useMovie = () => {
  return useContext(MovieContext);
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
