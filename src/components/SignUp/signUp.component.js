import React, { useEffect } from "react";
import OnboardingCard from "../onBoardingCard/onBoardingCard.component";
import "./signUp.css";
import CustomButton from "../customButton/customButtom.component";
import { useState } from "react";
import TickIcon from "../../assets/tick.svg";
import CrossIcon from "../../assets/cross.svg";
import HideIcon from "../../assets/hidePassword.svg";
import ViewIcon from "../../assets/showPassword.svg";
import { useNavigate } from 'react-router-dom';

const SignUp = () => (
  <OnboardingCard>
    <SignUpContent />
  </OnboardingCard>
);
export default SignUp;

const SignUpContent = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    company: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [password, setPassword] = useState("");
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [passwordValidations, setPasswordValidations] = useState({
    isLongEnough: false,
    hasNumber: false,
    hasSpecialChar: false,
  });
  const [iscapslock, setIsCapsLock] = useState(false);
  const navigate = useNavigate();

  // Validating Fields of Sign Up Form
  const validateForm = (name, value) => {
    let errors = { ...formErrors };

    if (name === "firstname" || name === "lastname") {
      if (!value.trim()) {
        errors[name] = "Field cannot be empty.";
      } else {
        delete errors[name];
      }
    }
    // Validating Email using Regex
    if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      errors["email"] = "Please enter a valid email address";
    } else if (name === "email") {
      delete errors["email"];
    }

    if (name === "confirmPassword") {
      if (value !== formData.password) {
        errors["confirmPassword"] = "Passwords do not match.";
      } else {
        delete errors["confirmPassword"];
      }
    }

    setFormErrors(errors);
  };

  // Handling Change for all the fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateForm(name, value);
    if (name === "password") {
      updatePassword(value);
    }
  };

  // Password Validation
  const updatePassword = (value) => {
    setPassword(value);
    setPasswordValidations({
      isLongEnough: value.length >= 8,
      hasNumber: /\d/.test(value),
      hasSpecialChar: /[!@#$%^&*(),._?":{}|<>]/.test(value),
    });
  };
  const passwordValidationMessages = [
    {
      text: "Must be 8 or more characters",
      valid: passwordValidations.isLongEnough,
    },
    {
      text: "Contain at least 1 number e.g. 123",
      valid: passwordValidations.hasNumber,
    },
    {
      text: "Contains at least 1 special character e.g. _ , @ , #",
      valid: passwordValidations.hasSpecialChar,
    },
  ];

  // Toggling the visibility state for password
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  // Toggling the visibility state for confirm password
  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  useEffect(() => {
    const handleCapsLock = (e) => {
      const isCapsLockOn = e.getModifierState("CapsLock");
      setIsCapsLock(isCapsLockOn);
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

  return (
    <>
      <h1>Sign Up</h1>
      <div className="content">
        <div className="side-by-side">
          <div className="form-field">
            <label htmlFor="firstname">First Name</label>
            <input
              name="firstname"
              id="firstname"
              type="text"
              placeholder="John"
              value={formData.firstname}
              onChange={handleChange}
              className={formErrors.firstname ? "input-warning" : ""}
            />

            {formErrors.firstname && (
              <small className="warning-text">{formErrors.firstname}</small>
            )}
          </div>
          <div className="form-field">
            <label htmlFor="lastname">Last Name</label>
            <input
              name="lastname"
              id="lastname"
              type="text"
              placeholder="Smith"
              value={formData.lastname}
              onChange={handleChange}
              className={formErrors.lastname ? "input-warning" : ""}
            />

            {formErrors.lastname && (
              <small className="warning-text">{formErrors.lastname}</small>
            )}
          </div>
        </div>
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
          <label htmlFor="company">Company Name(Optional)</label>
          <input
            name="company"
            id="company"
            type="text"
            placeholder="Walee"
            value={formData.company}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="password">Password</label>
          <div className="input-with-icon">
            <input
              name="password"
              id="password"
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={handleChange} // Use handleChange for password
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
              className={formErrors.password ? "input-warning" : ""}
            />
            {formErrors.password && (
              <small className="warning-text">{formErrors.password}</small>
            )}
            <img
              src={isPasswordVisible ? HideIcon : ViewIcon}
              alt="Toggle Password"
              className="toggle-icon"
              onClick={togglePasswordVisibility}
            />
          </div>
          {passwordFocused && (
            <div className="password-validation-messages">
              {passwordValidationMessages.map((message, index) => (
                <div
                  key={index}
                  className={`validation-message ${
                    message.valid ? "valid" : "invalid"
                  }`}
                >
                  <img
                    src={message.valid ? TickIcon : CrossIcon}
                    alt={message.valid ? "Valid" : "Invalid"}
                  />
                  &nbsp;
                  {message.text}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="form-field">
          <label htmlFor="confirm-password">Confirm Password</label>
          <div className="input-with-icon">
            <input
              name="confirmPassword"
              id="confirm-password"
              type={isConfirmPasswordVisible ? "text" : "password"}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={formErrors.confirmPassword ? "input-warning" : ""}
              onFocus={() => setConfirmPasswordFocused(true)}
              onBlur={() => setConfirmPasswordFocused(false)}
            />

            <img
              src={isConfirmPasswordVisible ? HideIcon : ViewIcon}
              alt="Toggle Confirm Password"
              className="toggle-icon"
              onClick={toggleConfirmPasswordVisibility}
            />
          </div>

          {iscapslock && (confirmPasswordFocused || passwordFocused) && (
            <span className="capslock-message">Caps lock is on</span>
          )}

          {formErrors.confirmPassword && (
            <small className="warning-text">{formErrors.confirmPassword}</small>
          )}
        </div>
      </div>
      <CustomButton text="Sign Up" onClick={() => {navigate('/dashboard')}}/>
      <div className="bottomText">
        Already have an account?
        <span className="textButton" onClick={() => {navigate('/signin')}}>Sign In</span>
      </div>
    </>
  );
};
