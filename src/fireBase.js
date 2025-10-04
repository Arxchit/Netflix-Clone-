import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { EmailAuthProvider } from "firebase/auth/web-extension";
import { collection, addDoc, getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDOX7EFmXmkdYoQLzIDoOE3nny40kXicZM",
  authDomain: "netflix-clone-ca014.firebaseapp.com",
  projectId: "netflix-clone-ca014",
  storageBucket: "netflix-clone-ca014.firebasestorage.app",
  messagingSenderId: "798995655911",
  appId: "1:798995655911:web:e0ab23b99c8761d074c642",
  measurementId: "G-H72H6S45N1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getFirestore(app)

const signUp = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user 
        await addDoc(collection(db, "user"), {
            uid : user.uid,
            name,
            EmailAuthProvider: "local",
            email
        })
    } catch (error) {
        console.log(error)
        alert(error)
    }
}

const login = async (email, password)=> {
    try {
        await signInWithEmailAndPassword(auth , email, password)
    } catch (error) {
        console.log(error)
        alert(error)
    }
}

const logOut = () => {
    signOut(auth)
}

export {auth, db, login, signUp, logOut}