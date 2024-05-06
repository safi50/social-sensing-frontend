import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Navigate, Outlet } from 'react-router-dom'; // Import Navigate
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";
import Navbar from "./components/navbar/Navbar.component";
import Footer from "./components/footer/Footer.component";
import SearchBar from "./components/searchBar/SearchBar.component";
import SavedSearches from "./components/savedsearches/SavedSearches.component";
import TrendingTable from "./components/trending_table/trending_table.component";
import OnboardingCard from "./components/onBoardingCard/onBoardingCard.component";
import SignUp from "./components/SignUp/signUp.component";
import SignIn from "./components/SignIn/signIn.component";
import SearchPage from "./components/SearchPage/SearchPage.component";
import Dashboard from "./components/dashboard/Dashboard.component";
import VerifyEmail from "./components/VerifyEmail/VerifyEmail";
import CheckEmail from "./components/CheckEmail/CheckEmail";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import EmailVerified from "./components/EmailVerified/EmailVerified";
import TopResults from "./components/Results/topResults.component";
import { SentimentResults } from "./components/sentiment-results/SentimentResults";
import { CompareKeyword } from "./components/compare-keywords/CompareKeyword";
import { CompareKeywordProvider } from "./contexts/CompareKeyword.context";
import { SavedSearchesProvider } from "./contexts/SavedSearches.context";
import { TopResultsFilterProvider } from "./contexts/TopResultsFilter.context";
import { Confirm } from "./components/confirm/confirm";
import { NewPassword } from "./components/confirm/resetPassword";
import { Error } from "./components/error-404/Error";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./PrivateRoute";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10rem 0rem;
  max-width: 120rem;
  margin: 0 auto;
`;

const PrimaryHeading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
  padding-bottom: 2rem;
`;

const SecondaryHeading = styled.h2`
  font-size: 1.6rem;
  font-weight: 500;
  color: #fff;
`;



const App = () => {

  return (
    <>
      <CompareKeywordProvider>
        <SavedSearchesProvider>
          <TopResultsFilterProvider>
            <Routes>
           
              {/* Protected Routes */}
              <Route path='/' element={<PrivateRoute />}>
              <Route path="/" element={<SearchPage />} />

                  <Route path="/onboarding" element={<OnboardingCard />} />
                  <Route path="/confirmEmail" element={<Confirm />} />
                  <Route path="/404" element={<Error />} />
                  <Route path="/verifyemail" element={<VerifyEmail />} />
                  <Route path="/emailverified" element={<EmailVerified />} />
                  
                  <Route path="/dashboard" element={<Dashboard />}>
                    <Route
                      path="/dashboard"
                      element={<SentimentResults />}
                    />
                    <Route
                      path="/dashboard/compare-keyword"
                      element={<CompareKeyword />}
                    />
                  </Route>
                  <Route path="/topResults" element={<TopResults />} />
                  </Route>

                     {/* Unprotected Routes */}
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route path="/resetPassword" element={<NewPassword />} />
              <Route path="/changePassword" element={<ChangePassword />} />
              <Route path="/checkemail" element={<CheckEmail />} />
              <Route path="/reset" element={<ResetPassword />} />

              
            </Routes>
          </TopResultsFilterProvider>
        </SavedSearchesProvider>
      </CompareKeywordProvider>
      <ToastContainer />
    </>
  );
};

export default App;