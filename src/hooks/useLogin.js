import { useMutation } from '@tanstack/react-query';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../configs/firebase';

const useLogin = () => {
  return useMutation({
    mutationFn: (({email, password}) => {
    return signInWithEmailAndPassword(auth, email, password);
  }),});
};

export default useLogin;