import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./store/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material";
import { RootState } from "./store/store";
import { lightTheme, darkTheme } from "./theme/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { setTheme } from "./store/theme/themeSlicer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Root = () => {
  const themeValue = useSelector((state: RootState) => state.theme.value);
  const dispatch = useDispatch();

  const theme = themeValue === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      dispatch(setTheme(e.matches ? "dark" : "light"));
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Root />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
