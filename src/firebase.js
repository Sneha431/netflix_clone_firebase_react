
  
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpK25ZT7N5xYxospOUbVFw93BakoZSEnA",
  authDomain: "netflix-clone-35209.firebaseapp.com",
  projectId: "netflix-clone-35209",
  storageBucket: "netflix-clone-35209.firebasestorage.app",
  messagingSenderId: "709105463214",
  appId: "1:709105463214:web:1fd779847dcc28b9b6623f"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const signup = async(name,email,password)=>{
try{
 const res=  await createUserWithEmailAndPassword(auth,email,password);
 const user = res.user;
 await addDoc(collection(db,"user"),{
  uid:user.uid,
  name,
  authProvider:"local",
  email

 })
}
catch(error){console.log(error);alert(error);}
}

const login = async(email,password)=>{
  try {
    await signInWithEmailAndPassword(auth,email,password);
  } catch (error) { console.log(error); alert(error); }
}

const logout = () =>{
  signOut(auth);
}

export {login,logout,signup,auth,db};