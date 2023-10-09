import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);

    const [loading,setLoading] = useState(true)

    const createUser = (email,password) =>{
        setLoading(true)

        return createUserWithEmailAndPassword(auth,email,password)
    }


    const googleSignIn =() =>{
        setLoading(true)
        return signInWithPopup(auth,GoogleAuthProvider)

    }


    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser => { 
            console.log('user onauthstatechanged',currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        // setUser(currentUser);

        return () => {
            unSubscribe();
        }
    },[])



    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSignIn 
    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children:PropTypes.node,
}