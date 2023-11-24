import { createContext } from "react";

export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const value={
        a:10
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;