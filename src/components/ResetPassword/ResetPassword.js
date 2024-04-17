import { React } from "react";
import styles from "./resetpassword.module.css";
import CustomButton from "../customButton/customButtom.component";
import resetpasswordlogo from "../../assets/reset-password.svg";
import waleeLogo from "../../assets/walee-logo.png";
import { useNavigate } from 'react-router-dom';


// confirmation message that password has been reset
const ResetPassword = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.resetpass_div}>
        <img
          src={waleeLogo}
          alt="walee logo"
          className="logo"
          style={{ display: "block", margin: "auto", marginTop: "20px" }}
        />
        <img
          src={resetpasswordlogo}
          alt="reset password logo"
          className={styles.resetpassword_logo}
          style={{ display: "block", margin: "auto", marginTop: "130px" }}
        />
        <h1 className={styles.resetpass_heading} style={{ textAlign: "center" }}>
          Password reset
        </h1>
        <p className={styles.text} style={{ width: "100%", textAlign: "center" }}>
          {" "}
          Your password has been successfully reset.
          <br />
          Click below to log in.
        </p>
        <div style={{margin: "25px 25px"}} className={styles.bottom_container}></div>
        <div style={{textAlign: "center"}} >
        <CustomButton className="customButton" text="Sign in" onClick={()=>{navigate('/signin')}}/>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
