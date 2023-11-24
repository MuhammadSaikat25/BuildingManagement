import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  ,onAuthStateChanged,signOut } from "firebase/auth";
import app from "./firebase";
export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
    const [loading,setLoading]=useState(false)
    const Auth=getAuth(app)
    const [user,setUser]=useState(null)

    const singUp=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(Auth,email,password)
    }
    const login=(email,password)=>{
      return  signInWithEmailAndPassword(Auth,email,password)
    }
    const singOut=()=>{
        return signOut(Auth)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(Auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return()=>{
            unsubscribe()
        }
    },[])
    
    const value={
       singUp,login,user,loading,singOut
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;