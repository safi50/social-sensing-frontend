import { React } from "react";
import OnboardingCard from "../onBoardingCard/onBoardingCard.component";
import "./verifyEmail.css";
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
      <img src={EmailIcon} className="email-logo" alt="logo for email" />
      <h1 className="main-heading">Verify Your Email</h1>
      <p className="lighttext">
        {" "}
        Please verify your email
        <span className="textButton">john@gmail.com</span> to continue
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
