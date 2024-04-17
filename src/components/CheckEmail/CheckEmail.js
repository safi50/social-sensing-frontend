import { React } from "react";
import OnboardingCard from "../onBoardingCard/onBoardingCard.component";
import styles from "./checkemail.module.css";
import CustomButton from "../customButton/customButtom.component";
import EmailIcon from "../../assets/email-logo.svg";
import { useNavigate} from 'react-router-dom';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { toast } from "react-toastify";
import {API_URL} from "../../utils/api";


// componenet for sending email and opening email window
const CheckEmail = () =>  {
  const location = useLocation();
  const { email } = location.state || {};
  console.log(email);
  
  return (
  <OnboardingCard>
    <CheckEmailContent 
    email={email}  />
  </OnboardingCard>
);
}
export default CheckEmail;

const CheckEmailContent = ({email}) => {
  const navigate = useNavigate();
  const openEmailWindow = () => {
    const mailtoLink = `mailto:${email}`;
    window.open(mailtoLink);
  };

  // sends email to the user
  const handleClickResend = async () => {
    try {
      const response = await axios.post( API_URL + '/auth/sendEmail', { email: email });
      if (response.status === 200) {
        toast.success("Email sent! Check your Inbox.", {
          position: "top-center",
          autoClose: 3000,
          style: { fontSize: "1.3rem" },
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
        });
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
      <img src={EmailIcon} className={styles.email_logo} alt="logo for email" />
      <h1 className={styles.check_main_heading}>Check your email</h1>
      <p className={styles.lighttext}>
        {" "}
        We sent a password reset link to
        <span className={styles.textButton}>{email}</span> 
      </p>
      <div className={styles.btn_div}>
        <CustomButton className="customButton" text="Open Email" onClick={openEmailWindow}/>
      </div>
      <p className={styles.plaintext}>
        Didn't receive the email?
        <span className={styles.textButton} onClick={handleClickResend}>Click to resend</span>
      </p>
      <div className={styles.bottomText}>
        Back to
        <span className={styles.textButton} onClick={()=>{navigate('/signin')}}>Sign in</span>
      </div>
    </>
  );
};

