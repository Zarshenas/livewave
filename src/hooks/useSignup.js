import { useMutation } from "@tanstack/react-query";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../configs/firebase";

export const useSignup = () => {
  return useMutation({
    mutationFn: (({email, password}) => {
      return createUserWithEmailAndPassword(auth, email, password);
    }),
  });
};
