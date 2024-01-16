import { React } from "react";
import OnboardingCard from "../onBoardingCard/onBoardingCard.component";
import styles from "./checkemail.module.css";
import CustomButton from "../customButton/customButtom.component";
import EmailIcon from "../../assets/email-logo.svg";
import { useNavigate } from 'react-router-dom';

const CheckEmail = () => (
  <OnboardingCard>
    <CheckEmailContent />
  </OnboardingCard>
);
export default CheckEmail;

const CheckEmailContent = () => {
  const navigate = useNavigate();
  return (
    <>
      <img src={EmailIcon} className={styles.email_logo} alt="logo for email" />
      <h1 className={styles.check_main_heading}>Check your email</h1>
      <p className={styles.lighttext}>
        {" "}
        We sent a password reset link to
        <span className={styles.textButton}>john@gmail.com</span> 
      </p>
      <div className={styles.btn_div}>
        <CustomButton className="customButton" text="Open email" onClick={()=>{navigate('/emailverified')}}/>
      </div>
      <p className={styles.plaintext}>
        Didn't receive the email?
        <span className={styles.textButton}>Click to resend</span>
      </p>
      <div className={styles.bottomText}>
        Back to
        <span className={styles.textButton} onClick={()=>{navigate('/signin')}}>Sign in</span>
      </div>
    </>
  );
};
