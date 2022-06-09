import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from '../button/button.component';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firbase/firebase.utils";
import "./sign-up-form.styles.scss";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const resetFormFields = () => setFormFields(defaultFormFields);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password, confirmPassword } = formFields;
    if (!password || !confirmPassword || password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const res = await createAuthUserWithEmailAndPassword(email, password);
      createUserDocumentFromAuth(res.user, { displayName });
      alert("User created");
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use.");
      } else {
        console.log("usercreation error", error);
      }
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          value={displayName}
          required
          onChange={handleChange}
        />
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
        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          required
        />
        <Button type="submit"> Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
