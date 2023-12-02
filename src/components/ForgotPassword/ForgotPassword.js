import { useState, React } from "react";
import OnboardingCard from "../onBoardingCard/onBoardingCard.component";
import CustomButton from "../customButton/customButtom.component";
import ForgotPasswordIcon from "../../assets/forgot-password.svg";
import styles from "./forgotpassword.module.css";

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

      <CustomButton className="customButton" text="Reset Password" />
      <div className={styles.bottomText}>
        Back to
        <span className={styles.textButton}>Sign in</span>
      </div>
    </>
  );
};
