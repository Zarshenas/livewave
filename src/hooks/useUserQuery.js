// useUserQuery.js
import { useQuery } from "@tanstack/react-query";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../configs/firebase";

const fetchLoggedInUser = () => {
  return new Promise((resolve) => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          resolve(user); // User is logged in
        } else {
          resolve(null); // No user is logged in
        }
      });
  });
//   onAuthStateChanged(auth, (user) => {
//     if (user) return user;
//     else return null;
//   });
};

export const useUserQuery = () => {
  return useQuery(
    {
      queryKey: ["user"], // 'queryKey' as an array
      queryFn: fetchLoggedInUser, // 'queryFn' instead of directly passing function
    },
  );
};
