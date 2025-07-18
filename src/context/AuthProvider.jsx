import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AuthContext from "./AuthContext";
import auth from "../firebase/firebase.init";
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import axios from "axios";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [theme, setTheme] = useState('light');
    
    // const handleTheme = () => {
    //     setTheme(theme === 'light'? 'dark' : 'light');
    //     // document.body.classList.toggle('dark');
    // }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const provider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };
    

    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        });
    };

    const SignOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            const email = { email: user?.email };
            if (user?.email) {
                axios
                    .post(
                        "https://food-sharing-server-nine.vercel.app/jwt",
                        email,
                        {
                            withCredentials: true,
                        }
                    )
                    .then((res) => {
                        // console.log(res.data)
                        setLoading(false);
                    });
            } else {
                axios
                    .post(
                        "https://food-sharing-server-nine.vercel.app/logout",
                        {},
                        {
                            withCredentials: true,
                        }
                    )
                    .then((res) => {
                        setLoading(false);

                        // console.log(res.data)
                    });
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        createUser,
        signInUser,
        signInWithGoogle,
        SignOutUser,
        updateUser,
        user,
        setLoading,
        setUser,
        loading,
        theme,
        setTheme,
    };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

AuthProvider.propTypes = {};

export default AuthProvider;
