import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDFpAP3tzcnSgBJfYRgTmDyhuP7GLSbJvM",
  authDomain: "crwn-clothing-db-ef251.firebaseapp.com",
  projectId: "crwn-clothing-db-ef251",
  storageBucket: "crwn-clothing-db-ef251.appspot.com",
  messagingSenderId: "708404329512",
  appId: "1:708404329512:web:4cb126dacac7506557c91d",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch {
      console.log("Error");
    }
  }
  return userDocRef;
};
