import { useState, React } from "react";
import { useEffect } from "react";
import OnboardingCard from "../onBoardingCard/onBoardingCard.component";
import "./signIn.css";
import CustomButton from "../customButton/customButtom.component";
import HideIcon from "../../assets/hidePassword.svg";
import ViewIcon from "../../assets/showPassword.svg";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../utils/api";
import axios from "axios";

// sign in page component
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
  const [iscapslock, setIsCapsLock] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleCapsLock = (e) => {
      if (e instanceof KeyboardEvent) {
        const isCapsLockOn = e.getModifierState("CapsLock");
        setIsCapsLock(isCapsLockOn);
      }
    };

    // Add event listeners for keydown and keyup
    document.addEventListener("keydown", handleCapsLock);
    document.addEventListener("keyup", handleCapsLock);

    // Remove the event listeners when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleCapsLock);
      document.removeEventListener("keyup", handleCapsLock);
    };
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const errors = {};
      // Check for form errors
      if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = "Please enter a valid email address";
      }
      if (!formData.password) {
        errors.password = "Password field cannot be empty.";
      }

      // Set form errors
      setFormErrors(errors);

      // If there are errors, stop form submission
      if (Object.keys(errors).length > 0) {
        console.error("Form is invalid");
        return;
      }
      // Proceed with login if no errors
      const response = await axios.post(API_URL + "/user/login", formData, {
        withCredentials: true,
      });
      if (response.status === 200) {
        const { token, user } = response.data;

        // Storing token in cookies
        document.cookie = `token=${token}; max-age=86400; path=/;`;

        document.cookie = `firstName=${user.firstName}; max-age=86400; path=/;`;

        console.log("Login successful");
        navigate("/searchPage");
      }
    } catch (error) {
      console.error("Error:", error);
      setFormErrors({ server: error.response.data });
    }
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
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
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
          {iscapslock && passwordFocused && (
            <span className="capslock-message">Caps lock is on</span>
          )}
          {formErrors.server && (
            <small className="warning-text">{formErrors.server}</small>
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
        <a href="/forgotpassword" className="forgot-password">
          Forgot Password?
        </a>
      </div>
      <CustomButton
        className="customButton"
        text="Sign In"
        onClick={handleSubmit}
      />

      <div className="bottomText">
        Need a new account?
        <span
          className="textButton"
          onClick={() => {
            navigate("/signup");
          }}
        >
          Sign Up
        </span>
      </div>
    </>
  );
};
