import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebase";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import validator from "validator";

const UserContext = createContext();

export const useContextValue = () => {
  const value = useContext(UserContext);
  return value;
};

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signUp = async (email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const currentUser = auth.currentUser;
      setUser(currentUser);
      toast.success("Registered Successfully.");
    } catch (error) {
      toast.error("Error in registering user");
      console.log("Error in registering user", error);
    }
  };

  const signIn = async (email, password) => {
    if (
      !email ||
      !validator.isEmail(email) ||
      !password ||
      !validator.isStrongPassword(password)
    )
      return toast.error("Invalid Email/Password");

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      setUser(auth.currentUser);
      toast.success("Login Successfully");
    } catch (error) {
      toast.error("Invalid Email/Password");
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      toast.success("Logout Successfully.");
    } catch (error) {
      toast.error("Logout Failed.");
    }
  };

  const userContextValue = {
    user,
    signUp,
    signIn,
    logout,
  };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};
