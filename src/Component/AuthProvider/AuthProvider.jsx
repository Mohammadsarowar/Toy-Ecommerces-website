import React, { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth,GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config.js";
import { useEffect } from "react";


const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  console.log(user);
  const [loading,setLoading] = useState(true)
  const createUser = (email, password) => {
     setLoading(true)
    return createUserWithEmailAndPassword(auth,email, password);
   
  };
  const singIn = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }
  const singInWithGoogle = () => {
     return signInWithPopup(auth,provider)
  }
  const logout = () =>{
    return signOut(auth)
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,createProfile =>{
       setUser(createProfile)
       console.log(createProfile);
       setLoading(false)
     return ()=>{
         return unsubscribe();
     }
     })
 },[])
  const authInfo = { 
    user,
    createUser,
    loading,
    logout,
    singIn,
    singInWithGoogle
 };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
