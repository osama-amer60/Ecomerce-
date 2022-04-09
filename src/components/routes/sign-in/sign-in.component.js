import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>Signin page</h1>

      <button onClick={logGoogleUser}>signInWithGooglePopup</button>
    </div>
  );
};

export default SignIn;
