import { React } from "react";
import OnboardingCard from "../onBoardingCard/onBoardingCard.component";
import styles from "./verifyEmail.module.css";
import CustomButton from "../customButton/customButtom.component";
import EmailIcon from "../../assets/email-logo.svg";

const VerifyEmail = () => (
  <OnboardingCard>
    <VerifyEmailContent />
  </OnboardingCard>
);
export default VerifyEmail;

const VerifyEmailContent = () => {
  return (
    <>
      <img src={EmailIcon} className={styles.email_logo} alt="logo for email" />
      <h1 className={styles.verify_main_heading}>Verify Your Email</h1>
      <p className={styles.lighttext}>
        {" "}
        Please verify your email 
        <span className={styles.textButton}>john@gmail.com</span> to continue
      </p>
      <div className={styles.btn_div}>
        <CustomButton className="customButton" text="Open email" />
      </div>
      <p className={styles.plaintext}>
        Didn't receive the email?
        <span className={styles.textButton}>Click to resend</span>
      </p>
      <div className={styles.bottomText}>
        Back to
        <span className={styles.textButton}>Sign in</span>
      </div>
    </>
  );
};
