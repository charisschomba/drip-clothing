import { signInGoogleWithPopup, createUserDocumentFromAuth } from "../../utils/firbase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
      const {user} = await signInGoogleWithPopup();  
      console.log(user)
      createUserDocumentFromAuth(user)

    }
    return (
        <div>
        <h1>sign in</h1>
        <button onClick={logGoogleUser}>Sign in with Google</button>
        </div>
    )
}
export default SignIn;