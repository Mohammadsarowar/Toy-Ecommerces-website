import React, {  createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, initializeAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.config.js';



// const auth = getAuth(app);
   
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user,setUser] = useState()
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const authInfo = {user}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;