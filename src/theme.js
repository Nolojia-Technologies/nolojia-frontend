import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens

export const tokens = (mode) => {
  let colors = {};

  switch (mode) {
    case "dark":
      colors = {
        // grey: {
        //   100: "#e0e0e0",
        //   200: "#c2c2c2",
        //   300: "#a3a3a3",
        //   400: "#858585",
        //   500: "#666666",
        //   600: "#525252",
        //   700: "#3d3d3d",
        //   800: "#292929",
        //   900: "#141414",
        // },
        
        
        // greenAccent: {
        //   100: "#dbf5ee",
        //   200: "#b7ebde",
        //   300: "#94e2cd",
        //   400: "#70d8bd",
        //   500: "#4cceac",
        //   600: "#3da58a",
        //   700: "#2e7c67",
        //   800: "#1e5245",
        //   900: "#0f2922",
        // },
        // redAccent: {
        //   100: "#f8dcdb",
        //   200: "#f1b9b7",
        //   300: "#e99592",
        //   400: "#e2726e",
        //   500: "#db4f4a",
        //   600: "#af3f3b",
        //   700: "#832f2c",
        //   800: "#58201e",
        //   900: "#2c100f",
        // },
        // blueAccent: {
        //   100: "#cfcddc",
        //   200: "#9e9bba",
        //   300: "#6e6897",
        //   400: "#3d3675",
        //   500: "#0d0452",
        //   600: "#0a0342",
        //   700: "#080231",
        //   800: "#050221",
        //   900: "#030110",
        // },
        // #0D0452
        primary: {
            100: "#d0d1d5",
            200: "#a1a4ab",
            300: "#727681",
            400: "#434957",
            500: "#141b2d",
            600: "#101624",
            700: "#0c101b",
            800: "#080b12",
            900: "#040509",
          },
      };
      break;
    case "light":
      colors = {
        // #F6B50B
        blueAccent: {
              100: "#cfcddc",
              200: "#9e9bba",
              300: "#6e6897",
              400: "#3d3675",
              500: "#0d0452",
              600: "#0a0342",
              700: "#080231",
              800: "#050221",
              900: "#030110",
            },
      };
      break;
    default:
      colors = {
        primary: {
          500: "#000000",
        },
      };
  }

  return colors;
};

// mui theme settings

export const themeSettings = (mode) => {
  const colors = tokens(mode) || {};

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // dark mode
            primary: {
              main: colors.primary?.[500] || "#cfcddc",
            },

            secondary: {
              main: colors.secondary?.[300] || "#f6b50b",
            },

            background: {
              default: colors.primary?.[500] || "#0d0452",
            },
          }
        : {
            // light mode
            primary: {
              main: colors.primary?.[100] || "#cfcddc",
            },

            secondary: {
              main: colors.secondary?.[100] || "#f6b50b",
            },

            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: 12,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    },
  };
};

// context for color mode
// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const UseMode = () => {
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
