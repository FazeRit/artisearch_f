import { createTheme } from "@mui/material";

// Світла тема
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4a4a4a", // Темний сірий
      contrastText: "#ffffff", // Білий текст на кнопках
    },
    secondary: {
      main: "#8b0000", // Темно-бордовий (акцент)
      contrastText: "#ffffff", // Білий текст
    },
    background: {
      default: "#f4f4f4", // Світлий сірий фон
      paper: "#ffffff", // Білий для карток
    },
    text: {
      primary: "#333333", // Темний текст
      secondary: "#666666", // Світліший текст для додаткової інформації
    },
  },
});

// Темна тема
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2d2d2d", // Насичений графітовий
      contrastText: "#ffffff", // Білий текст
    },
    secondary: {
      main: "#8b0000", // Темно-бордовий
      contrastText: "#ffffff", // Білий текст
    },
    background: {
      default: "#1b1b1b", // Темний графітовий фон
      paper: "#252525", // Трохи світліший для карток
    },
    text: {
      primary: "#e0e0e0", // Світло-сірий текст
      secondary: "#b3b3b3", // Світліший сірий текст
    },
  },
});
