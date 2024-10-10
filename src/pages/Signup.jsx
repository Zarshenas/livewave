import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/livewavelogo.svg";


const Signup = () => {
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
          <form>
            <TextField
              variant="outlined"
              fullWidth
              label="Username"
              type="text"
              sx={{
                marginBottom: "1rem",
              }}
            />
            <TextField
              variant="outlined"
              fullWidth
              label="Email"
              type="email"
              sx={{
                marginBottom: "1rem",
              }}
            />
            <TextField
              variant="outlined"
              fullWidth
              label="Password"
              type="password"
              sx={{
                marginBottom: "1rem",
              }}
            />
            <Button
              variant="contained"
              fullWidth
              sx={{
                marginTop: "1rem",
              }}
            >
              Sign Up
            </Button>
          </form>
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
