import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useUserQuery } from "../hooks/useUserQuery";
import { signOut } from 'firebase/auth';
import { auth } from "../configs/firebase";

function Home() {
  const { data: user,refetch, isLoading } = useUserQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        refetch(); 
        console.log('User signed out');
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  return (
    <>
      <Container>
        <Typography variant="h1">Home</Typography>
        {user ? (
          <>
            <Typography variant="h3">Welcome, {user.email}</Typography>
            <Button type="button" onClick={handleLogout}>Logout</Button>
          </>
        ) : (
          <Box>
            <Typography variant="h5">
              <Link to={"/signup"}>Signup</Link>
            </Typography>
            <Typography variant="h5">
              <Link to={"/login"}>Login</Link>
            </Typography>
          </Box>
        )}
      </Container>
    </>
  );
}

export default Home;
