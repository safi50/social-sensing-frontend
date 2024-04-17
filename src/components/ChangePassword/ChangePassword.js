import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation hook to access URL parameters
import styles from "./changepassword.module.css";
import CustomButton from "../customButton/customButtom.component";
import HideIcon from "../../assets/hidePassword.svg";
import ViewIcon from "../../assets/showPassword.svg";
import changepasswordlogo from "../../assets/change-password.svg";
import waleeLogo from "../../assets/walee-logo.png";
import axios from 'axios'; // Import Axios to make HTTP requests
import {API_URL} from "../../utils/api"; 
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmpassword: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [userToken, setUserToken] = useState(""); 
  const location = useLocation();
  const navigate = useNavigate(); 

  // Extract token from URL parameter when component mounts
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    setUserToken(token); // Store the token in state
  }, [location]);

  // Validating Fields of Sign In Form
  const validateForm = (name, value) => {
    let errors = { ...formErrors };

    if (name === "password") {
      if (!value.trim()) {
        errors[name] = "Password field cannot be empty.";
      } else {
        delete errors[name];
      }
    }
    if (name === "confirmpassword") {
      if (!value.trim()) {
        errors[name] = "Confirm password field cannot be empty.";
      } else if (value !== formData.password) {
        errors[name] = "Confirm password does not match the new password.";
      } else {
        delete errors[name];
      }
    }
    setFormErrors(errors);
  };

  // handle password entries
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    validateForm(name, value);
  };

  // Toggling Password Visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const handleResetPassword = async () => {
  
    try {
      const response = await axios.post(API_URL + "/user/updatePassword", {
        newPassword: formData.password,
        token: userToken,
      });
  
      console.log(response.data); 
      if (response.status === 200) {
        navigate("/signin"); 
        toast.success("Password updated Successfully.", {
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
      if (error.response.status === 401) {
        toast.error("Invalid or expired token. Try Again!", {
          position: "top-center",
          autoClose: 3000,
          style: { fontSize: "1.3rem" },
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
        });
      } else {
      toast.error("An error occurred. Please try again later.", 
      {
        position: "top-center",
        autoClose: 3000,
        style: { fontSize: "1.3rem" },
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
    }
    }
  }

  return (
    <>
      <div className={styles.changepass_div}>
        <img
          src={waleeLogo}
          alt="walee logo"
          className={styles.logo}
          style={{ display: "block", margin: "auto", marginTop: "20px" }}
        />
        <img
          src={changepasswordlogo}
          alt="change password logo"
          className={styles.changepassword_logo}
          style={{ display: "block", margin: "auto", marginTop: "30px" }}
        />
        <h1 className={styles.changepass_heading} style={{ textAlign: "center" }}>
          Change Password
        </h1>
        <p className={styles.text} style={{ width: "100%" }}>
          {" "}
          In order to{" "}
          <span style={{ fontWeight: 700, color: "black" }}>
            protect your account,
          </span>{" "}
          make sure your password:
        </p>
        <ul className={styles.text} style={{ marginLeft: "15px", width: "100%" }}>
          <li>is longer than 8 characters</li>
          <li>
            Does not match or significantly contain your username,
            <br />
            e.g. do not use 'username123'.
          </li>
        </ul>
        <div className={styles.content} style={{ marginTop: "2.5rem" }}>
          <div className={styles.form_field}>
            <label htmlFor="password">New Password</label>
            <div className={styles.input_with_icon}>
              <input
                name="password"
                id="password"
                type={isPasswordVisible ? "text" : "password"}
                placeholder="********"
                value={formData.password}
                onChange={handleChange}
                className={formErrors.password ? styles.input_warning : ""}
              />
              <img
                src={isPasswordVisible ? HideIcon : ViewIcon}
                alt="Toggle Password"
                className={styles.toggle_icon}
                onClick={togglePasswordVisibility}
              />
            </div>
            {formErrors.password && (
              <small className={styles.warning_text}>{formErrors.password}</small>
            )}
          </div>

          <div className={styles.form_field}>
            <label htmlFor="confirmpassword">Re-enter New Password</label>
            <div className={styles.input_with_icon}>
              <input
                name="confirmpassword"
                id="confirmpassword"
                type={isConfirmPasswordVisible ? "text" : "password"}
                placeholder="********"
                value={formData.confirmpassword}
                onChange={handleChange}
                className={formErrors.confirmpassword ? styles.input_warning : ""}
              />
              <img
                src={isConfirmPasswordVisible ? HideIcon : ViewIcon}
                alt="Toggle Confirm Password"
                className={styles.toggle_icon}
                onClick={toggleConfirmPasswordVisibility}
              />
            </div>
            {formErrors.confirmpassword && (
              <small className={styles.warning_text}>{formErrors.confirmpassword}</small>
            )}
          </div>
        </div>

        <div className={styles.bottom_container}></div>
        <CustomButton className="customButton" text="Change Password" onClick={handleResetPassword} />
        <div className={styles.bottomText} style={{ marginTop: "120px" }}>
          Back to
          <span className={styles.textButton} onClick={() => navigate('/signin')}>Sign in</span>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
