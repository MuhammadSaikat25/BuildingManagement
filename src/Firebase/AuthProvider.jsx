import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "./firebase";
import axios from "axios";
export const AuthContext = createContext(null);

const Auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const singUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(Auth, email, password);
  };
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(Auth, email, password);
  };
  const google = () => {
    setLoading(true);
    return signInWithPopup(Auth, provider);
  };
  const singOut = () => {
    return signOut(Auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
      setUser(currentUser)
      if (currentUser) {
        const userInfo = { email: currentUser?.email };
        setLoading(false);
        axios.post("http://localhost:5000/jwt", userInfo).then((res) => {
          const token = res.data.token;
          localStorage.setItem("token", token);
          // setLoading(false);
          setUser(currentUser);
        });
      } else {
        setLoading(false)
        localStorage.removeItem("token");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
 
  const value = {
    singUp,
    login,
    user,
    loading,
    singOut,
    google,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
