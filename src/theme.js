import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        black: {
          100: "#cdd3d5",
          200: "#9ba7ac",
          300: "#6a7c82",
          400: "#385059",
          500: "#06242f",
          600: "#051d26",
          700: "#04161c",
          800: "#020e13",
          900: "#010709",
        },
        darkblue: {
          100: "#d0dade",
          200: "#a1b5bd",
          300: "#738f9b",
          400: "#446a7a",
          500: "#154559",
          600: "#113747",
          700: "#0d2935",
          800: "#081c24",
          900: "#040e12",
        },
        blue: {
          100: "#d7e9e6",
          200: "#aed2ce",
          300: "#86bcb5",
          400: "#5da59d",
          500: "#358f84",
          600: "#2a726a",
          700: "#20564f",
          800: "#153935",
          900: "#0b1d1a",
        },
        green: {
          100: "#e1f0ea",
          200: "#c3e1d4",
          300: "#a6d3bf",
          400: "#88c4a9",
          500: "#6ab594",
          600: "#559176",
          700: "#406d59",
          800: "#2a483b",
          900: "#15241e",
        },
        white: {
          100: "#fdfce5",
          200: "#fbf9cb",
          300: "#f8f7b2",
          400: "#f6f498",
          500: "#f4f17e",
          600: "#c3c165",
          700: "#92914c",
          800: "#626032",
          900: "#313019",
        },
      }
    : {
        black: {
          100: "#010709",
          200: "#020e13",
          300: "#04161c",
          400: "#051d26",
          500: "#06242f",
          600: "#385059",
          700: "#6a7c82",
          800: "#9ba7ac",
          900: "#cdd3d5",
        },
        darkblue: {
          100: "#040e12",
          200: "#081c24",
          300: "#0d2935",
          400: "#113747",
          500: "#154559",
          600: "#446a7a",
          700: "#738f9b",
          800: "#a1b5bd",
          900: "#d0dade",
        },
        blue: {
          100: "#0b1d1a",
          200: "#153935",
          300: "#20564f",
          400: "#2a726a",
          500: "#358f84",
          600: "#5da59d",
          700: "#86bcb5",
          800: "#aed2ce",
          900: "#d7e9e6",
        },
        green: {
          100: "#15241e",
          200: "#2a483b",
          300: "#406d59",
          400: "#559176",
          500: "#6ab594",
          600: "#88c4a9",
          700: "#a6d3bf",
          800: "#c3e1d4",
          900: "#e1f0ea",
        },
        white: {
          100: "#313019",
          200: "#626032",
          300: "#92914c",
          400: "#c3c165",
          500: "#f4f17e",
          600: "#f6f498",
          700: "#f8f7b2",
          800: "#fbf9cb",
          900: "#fdfce5",
        },
      }),
});

// mui theme settings

export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.black[500],
            },
            secondary: {
              main: colors.darkblue[500],
            },
            neutral: {
              dark: colors.green[700],
              main: colors.green[500],
              light: colors.green[100],
            },
            background: {
              default: colors.black[500],
            },
          }
        : {
            primary: {
              main: colors.black[100],
            },
            secondary: {
              main: colors.darkblue[500],
            },
            neutral: {
              dark: colors.green[700],
              main: colors.green[500],
              light: colors.green[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
        fontFamily: ["Source Sans 3", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
            fontFamily: ["Source Sans 3", "sans-serif"].join(","),
            fontSize: 40
        },
        h2: {
            fontFamily: ["Source Sans 3", "sans-serif"].join(","),
            fontSize: 32,
        },
        h3: { 
            fontFamily: ["Source Sans 3", "sans-serif"].join(","),
            fontSize: 24,
        },
        h4: {
            fontFamily: ["Source Sans 3", "sans-serif"].join(","),
            fontSize: 20,
        },
        h5: {
            fontFamily: ["Source Sans 3", "sans-serif"].join(","),
            fontSize: 16,
        },
        h6: {
            fontFamily: ["Source Sans 3", "sans-serif"].join(","),
            fontSize: 14,
        }
    }
  };
};

//context
export const ColorModeContext = createContext({
    toggleColorMode: () => {}
});

export const useMode = () => {
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => (prev === "light" ? "dark" : "light")),
        }),
        []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return [theme, colorMode];
};