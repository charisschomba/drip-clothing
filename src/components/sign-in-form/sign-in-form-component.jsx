import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button, { buttonTypeClasses } from "../button/button.component";
import {
  signInUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInGoogleWithPopup,
} from "../../utils/firbase/firebase.utils";
import { SignInContainer, ButtonsContainer } from "./sign-in-form.styles.jsx";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const resetFormFields = () => setFormFields(defaultFormFields);

  const signInWithGoogle = async () => {
    await signInGoogleWithPopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = formFields;
    try {
      await signInUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };
  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          required
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          required
          onChange={handleChange}
        />
        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={buttonTypeClasses.google}
            onClick={signInWithGoogle}
          >
            Google sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
