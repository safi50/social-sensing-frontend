import React, { useState } from "react";
import OnboardingCard from "../onBoardingCard/onBoardingCard.component";
import CustomButton from "../customButton/customButtom.component";
import ForgotPasswordIcon from "../../assets/forgot-password.svg";
import CheckEmail from "../CheckEmail/CheckEmail";
import styles from "./forgotpassword.module.css";
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { toast } from "react-toastify";
import {API_URL} from "../../utils/api";


// componenet to ask user of the email inorder to change password
const ForgotPassword = () => (
  <OnboardingCard>
    <ForgotPasswordContent />
  </OnboardingCard>
);

export default ForgotPassword;

const ForgotPasswordContent = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [formErrors, setFormErrors] = useState({});  
  const navigate = useNavigate();

  // Validating Fields of Sign In Form
  const validateForm = (name, value) => {
    let errors = { ...formErrors };

    if (name === "email") {
      if (!/\S+@\S+\.\S+/.test(value)) {
        errors[name] = "Please enter a valid email address";
      } else {
        delete errors["email"];
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
    validateForm(name, value);
  };

  // Send email to backend for password reset
  const handleResetPassword = async () => {
    try {
      const response = await axios.post( API_URL + '/auth/sendEmail', { email: formData.email });
      if (response.status === 200) {
        navigate("/checkEmail", { state: { email: formData.email } });
      
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again later.", {
        position: "top-center",
        autoClose: 3000,
        style: { fontSize: "1.3rem" },
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
    }
  };

  return (
    <>
      <img
        src={ForgotPasswordIcon}
        className={styles.forgot_logo}
        alt="logo for forgot password"
      />
      <h1 className={styles.forgot_main_heading}>Forgot Password?</h1>
      <p className={styles.lighttext}>
        {" "}
        No worries, we'll send you reset instructions.
      </p>
      <div className={styles.content} style={{ marginBottom: "1rem" }}>
        <div className={styles.form_field}>
          <label htmlFor="email" style={{ marginBottom: "1rem" }}>
            Email
          </label>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className={formErrors.email ? styles.input_warning : ""}
          />
          {formErrors.email && (
            <small className={styles.warning_text}>{formErrors.email}</small>
          )}
        </div>
      </div>

      <CustomButton className="customButton" text="Reset Password" onClick={handleResetPassword}/>
      <div className={styles.bottomText}>
        Back to
        <span className={styles.textButton} onClick={() => navigate('/signin')}>Sign in</span>
      </div>
    </>
  );
};
