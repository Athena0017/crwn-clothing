import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-in.styles.scss";
import { signInWithGoogle } from "../../firebase/firebase.utils";
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handlerSubmit = (event) => {
    event.defaultPrevented();
    this.setState({ email: "", password: "" });
  };
  handlerChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>sign in with your email and password</span>
        <form onSubmit={this.handlerSubmit}>
          <FormInput
            name="email"
            type="email"
            label="Email"
            value={this.state.email}
            handlerChange={this.handlerChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="Password"
            value={this.state.password}
            handlerChange={this.handlerChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit" children="SIGN IN" />
            <CustomButton
              type="submit"
              children="SIGN IN WITH GOOGLE"
              onClick={signInWithGoogle}
              isGoogleSignIn
            />
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
