import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebaseConfig";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";


export const AuthContext =createContext(null)
//social auth provider
const googleProvider =new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const FirebaseProvider = ({children}) => {
  const [user,setUser] = useState(null)
  const [loading,setLoading] =useState(true)
  const [reload,setReload] =useState(null)
  


  //create user

  const createUser =(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }
  

  //update user profile

  const updateUserProfile =(name,image) =>{
    return updateProfile(auth.currentUser, {
      displayName: name,
       photoURL: image
    })
   
    
  }

  //login in user

  const logIn = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  //google login in

  const googleLogin =()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
  }

  //github login in

  const gitubLogin =() =>{
    setLoading(true)
    return signInWithPopup(auth,githubProvider)
  }

  //logout 
  const logout =() =>{
    
    setUser(null)
    signOut(auth)
  }





  //observer
  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
       setUser(user)
      
        
      } 
      setLoading(false)
    });
      return ()=> unsubscribe();
  },[reload])

  const authInfo ={
    createUser,
    logIn,
    googleLogin,
    gitubLogin,
    logout,
    user,
    updateUserProfile,
    loading,
    setReload
  }
 
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default FirebaseProvider;