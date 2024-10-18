import { Box, TextField, Button, Typography, Container } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/livewavelogo.svg";
import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();

  const { mutate, isError, isPending, error } = useSignup();

  const handleSignUp = (e) => {
    e.preventDefault();
    mutate({ email, password },{onSuccess:()=>{
        navigate('/login');
    }});
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
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: "1.5rem" }}>
            Sign Up
          </Typography>
          <form onSubmit={handleSignUp}>
            <TextField
              variant="outlined"
              fullWidth
              label="Email"
              type="email"
              sx={{
                marginBottom: "1rem",
              }}
              required
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
              required
              value={password}              
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                marginTop: "1rem",
              }}
              disabled={isPending}
            >
              {isPending ? "Signing Up..." : "Sign Up"}
            </Button>
          </form>
          {isError && (
            <Typography variant="span" sx={{ color: "#ff0000" }}>
              {error.message}
            </Typography>
          )}
          <Typography sx={{ marginTop: "1rem" }}>
            Already have an account?{" "}
            <Link to={"/login"}>
              <Typography variant="span" sx={{ color: "#007BFF" }}>
                Log In
              </Typography>
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Signup;
