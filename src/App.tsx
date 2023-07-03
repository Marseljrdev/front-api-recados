import React from "react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider } from "@mui/material";
import defaultTheme from "./config/theme/defaultTheme";
import { store } from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
          <AppRoutes />
        </ThemeProvider>
      </Provider>
    </React.Fragment>
  );
}

export default App;
