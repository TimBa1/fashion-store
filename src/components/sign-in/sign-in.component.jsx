import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import "./sign-in.styles.scss";
import CustomButton from "../custom-button/custom-button.component";



function SignIn() {
  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ email: "", password: "" });
  };

  const [state, setState] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setState({ [name]: value });
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput 
          name="email"
          type="email"
          value={state.email}
          handleChange={handleChange}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={state.password}
          handleChange={handleChange}
          label="password"
          required
        />

        <CustomButton type="submit">Sigh In</CustomButton>

        
      </form>
    </div>
  );
}

export default SignIn;
