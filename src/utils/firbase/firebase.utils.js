import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzM5SUukXGM_8YRy-yCv7HqcoBpDrmEtY",
  authDomain: "drip-clothing-dp.firebaseapp.com",
  projectId: "drip-clothing-dp",
  storageBucket: "drip-clothing-dp.appspot.com",
  messagingSenderId: "66653077595",
  appId: "1:66653077595:web:b1d601c034f0ead6507f7e",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInGoogleWithPopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  user,
  additiomalInfomation = {}
) => {
  if (!user) return;
  const userDocRef = doc(db, "users", user.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additiomalInfomation,
      });
    } catch (error) {}
    return userDocRef;
  }
  console.log(userSnapshot);
};
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
