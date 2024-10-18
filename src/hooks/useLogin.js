import { useMutation } from "@tanstack/react-query";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../configs/firebase";
import { useUserQuery } from "./useUserQuery";

const useLogin = () => {
  const { refetch } = useUserQuery();
  return useMutation({
    mutationFn: async ({ email, password }) => {
      const loginData = await signInWithEmailAndPassword(auth, email, password);
      await refetch();
      return loginData;
    },
  });
};

export default useLogin;
