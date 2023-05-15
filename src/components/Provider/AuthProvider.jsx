import React, { createContext, useEffect, useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import app from '../../Firebase/firebase.config';


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    
    // sign up
    const createUser = (email,password) => {
      return createUserWithEmailAndPassword(auth, email,password);
    }
   
    //sign in
    const signIn = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
    };

    
    // sign out
    const logOut = () =>{
      return signOut(auth);
    }

    //stop observer user auth state and when page is load will call api and when click button

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth,currentUser => {
        setUser(currentUser);
        setLoading(false);
        //stop observing while unmounting
        return () =>{
          return unsubscribe();
        }
      })
    })
    const authInfo = {
      user,
      loading,
      createUser,
      signIn,
      logOut,

    };
    return (

      <AuthContext.Provider value={authInfo}>{children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;