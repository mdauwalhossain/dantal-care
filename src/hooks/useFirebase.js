import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result.user);
        })
    }

    const emaill = (email, password) =>{
        console.log(email, password)
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })

        
    }
   
    const logOut = () =>{
        signOut(auth)
        .then(() =>{
            setUser({})
        })
    }
// observer
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              
              setUser(user)
             
            }
          });
    },[])

    return{
        user,
        signInUsingGoogle,
        logOut,
        emaill

    }

}

export default useFirebase;