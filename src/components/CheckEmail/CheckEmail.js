import { React } from "react";
import OnboardingCard from "../onBoardingCard/onBoardingCard.component";
import "../VerifyEmail/verifyEmail.css";
import CustomButton from "../customButton/customButtom.component";
import EmailIcon from "../../assets/email-logo.svg";

const CheckEmail = () => (
  <OnboardingCard>
    <CheckEmailContent />
  </OnboardingCard>
);
export default CheckEmail;

const CheckEmailContent = () => {
  return (
    <>
      <img src={EmailIcon} className="email-logo" alt="logo for email" />
      <h1 className="main-heading">Check your email</h1>
      <p className="lighttext">
        {" "}
        We sent a password reset link to
        <span className="textButton">john@gmail.com</span> 
      </p>
      <div className="btn-div">
        <CustomButton className="customButton" text="Open email" />
      </div>
      <p className="plaintext">
        Didn't receive the email?
        <span className="textButton">Click to resend</span>
      </p>
      <div className="bottomText">
        Back to
        <span className="textButton">Sign in</span>
      </div>
    </>
  );
};
