import { useState, React } from "react";
import OnboardingCard from "../onBoardingCard/onBoardingCard.component";
import "./signIn.css";
import CustomButton from "../customButton/customButtom.component";
import HideIcon from "../../assets/hidePassword.svg";
import ViewIcon from "../../assets/showPassword.svg";

const SignIn = () => (
  <OnboardingCard>
    <SignInContent />
  </OnboardingCard>
);

export default SignIn;

const SignInContent = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Validating Fields of Sign In Form
  const ValidateForm = (name, value) => {
    let errors = { ...formErrors };

    if (name === "email") {
      if (!/\S+@\S+\.\S+/.test(value)) {
        errors[name] = "Please enter a valid email address";
      } else {
        delete errors["email"];
      }
    }

    if (name === "password") {
      if (!value.trim()) {
        errors[name] = "Password field cannot be empty.";
      } else {
        delete errors[name];
      }
    }
    setFormErrors(errors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    ValidateForm(name, value);
  };

  // Toggling Password Visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
      <h1>Sign In</h1>
      <p className="text">
        {" "}
        Sign into your account and start upscaling with largest and fastest
        growing influencers network.
      </p>
      <div className="content">
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="john@gmail.com"
            value={formData.email}
            onChange={handleChange}
            className={formErrors.email ? "input-warning" : ""}
          />
          {formErrors.email && (
            <small className="warning-text">{formErrors.email}</small>
          )}
        </div>

        <div className="form-field">
          <label htmlFor="password">Password</label>

          <div className="input-with-icon">
            <input
              name="password"
              id="password"
              type={isPasswordVisible ? "text" : "password"}
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              className={formErrors.password ? "input-warning" : ""}
            />
            <img
              src={isPasswordVisible ? HideIcon : ViewIcon}
              alt="Toggle Confirm Password"
              className="toggle-icon"
              onClick={togglePasswordVisibility}
            />
          </div>
          {formErrors.password && (
            <small className="warning-text">{formErrors.password}</small>
          )}
        </div>
      </div>
      <div className="bottom-container">
        <div className="checkbox">
          <input type="checkbox" id="rememberme" />
          <label className="checkbox-label" htmlFor="rememberme">
            Remember me
          </label>
        </div>
        <a href="/" className="forgot-password">
          Forgot Password?
        </a>
      </div>
      <CustomButton className="customButton" text="Sign In" />
      <div className="bottomText">
        Need a new account?
        <span className="textButton">Sign Up</span>
      </div>
    </>
  );
};
