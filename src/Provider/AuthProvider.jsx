import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import auth from '../firebase/firebase.config';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider
const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const registrationWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleSignupWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }



    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)

        })
        return () => {
            unSubscribed()
        }
    }, [])

    const authData = {
        registrationWithEmailAndPassword,
        setUser,
        user,
        handleSignupWithGoogle,
        loading
    }

    return <AuthContext value={authData}>
        <ToastContainer position="top-right" autoClose={3000} />
        {children}
    </AuthContext>
};

export default AuthProvider;