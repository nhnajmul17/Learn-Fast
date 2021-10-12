
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const auth = getAuth();


    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const handleSingIn = e => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const handleSignUp = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('password must be 6 characters');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })

    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });

    }, [])

    return { user, signInWithGoogle, logOut, handleSingIn, handleSignUp, handleEmail, handlePassword, error }

}

export default useFirebase;