import { React } from "react";
import styles from "./emailverified.module.css";
import CustomButton from "../customButton/customButtom.component";
import emailverifiedlogo from "../../assets/email-verified.svg";
import waleeLogo from "../../assets/walee-logo.png";

const EmailVerified = () => {
  return (
    <>
      <div className={styles.verified_div}>
        <img
          src={waleeLogo}
          alt="walee logo"
          className="logo"
          style={{ display: "block", margin: "auto", marginTop: "20px" }}
        />
        <img
          src={emailverifiedlogo}
          alt="email verify logo"
          className={styles.verified_logo}
          style={{ display: "block", margin: "auto", marginTop: "130px" }}
        />
        <h1 className={styles.verified_heading} style={{ textAlign: "center" }}>
          Email Verified
        </h1>
        <p className={styles.text} style={{ width: "100%", textAlign: "center" }}>
          {" "}
          Your email has been successfully been verified.
        </p>
        <div style={{margin: "25px 25px"}} className={styles.bottom_container}></div>
        <div style={{textAlign: "center"}} >
        <CustomButton className="customButton" text="Continue" />
        </div>
      </div>
    </>
  );
};

export default EmailVerified;
