import { Box, TextField, Button, Typography, Container } from "@mui/material";
import Logo from "../assets/livewavelogo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import useLogin from "../hooks/useLogin";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate, isError, isPending, error } = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();
    mutate({ email, password });
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        gap: "40px",
      }}
    >
      <Box
        component="img"
        sx={{
          height: 100,
          width: 100,
          mx: "auto",
          my: "0",
        }}
        alt="The house from the offer."
        src={Logo}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "background.paper", // Card background
            padding: "2rem",
            borderRadius: "10px",
            width: "400px",
            textAlign: "center",
            borderColor: "",
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: "1.5rem" }}>
            Login
          </Typography>
          <form onSubmit={handleLogin}>
            <TextField
              variant="outlined"
              fullWidth
              label="Email"
              type="email"
              sx={{
                marginBottom: "1rem",
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              fullWidth
              label="Password"
              type="password"
              sx={{
                marginBottom: "1rem",
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#007BFF", // Primary blue color
              }}
              type="submit"
              disabled={isPending}
            >
              {isPending ? "Logging In..." : "Login"}
            </Button>
          </form>
          {isError && (
            <Typography variant="span" sx={{ color: "#ff0000" }}>
              {error.message}
            </Typography>
          )}
          <Typography sx={{ marginTop: "1rem" }}>
            Don’t have an account?{" "}
            <Link to={"/signup"}>
              <Typography variant="span" sx={{ color: "#007BFF" }}>
                Sign up
              </Typography>
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
