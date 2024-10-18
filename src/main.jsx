import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";



const queryClient = new QueryClient();
// Define the custom theme using your palette
const theme = createTheme({
  palette: {
    mode: "dark", // Switch between 'light' and 'dark' for dark/light mode
    primary: {
      main: "#1B4DFF", // Bright blue (primary)
      light: "#3A6FFF", // Lighter blue
      dark: "#0A2D9C", // Dark blue
      contrastText: "#FFFFFF", // Text on primary buttons
    },
    secondary: {
      main: "#2D2D2D", // Dark gray (secondary)
      light: "#4A4A4A", // Lighter gray
      dark: "#1C1C1C", // Darker gray
      contrastText: "#FFFFFF", // Text on secondary buttons
    },
    background: {
      default: "#000000", // Dark background color
      paper: "#11131A", // Surface color in dark mode (cards, etc.)
    },
    text: {
      primary: "#FFFFFF", // Text color in dark mode
      secondary: "#AAAAAA", // Muted text color
    },
    error: {
      main: "#FF5B5B", // Red (error color)
    },
    warning: {
      main: "#FFCC00", // Yellow (warning color)
    },
    info: {
      main: "#00C8FF", // Light blue (info color)
    },
    success: {
      main: "#00FF85", // Green (success color)
    },
  },
  typography: {
    // fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: "bold",
    },
    h5: {
      fontSize: "1.2rem",
      fontWeight: "normal",
    },
    button: {
      textTransform: "none", // Prevents uppercase on buttons
    },
  },
  shape: {
    borderRadius: 8, // Use for button, input field, etc.
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
);
