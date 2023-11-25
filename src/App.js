import React from "react";
import Navbar from "./components/navbar/Navbar.component";
import Footer from "./components/footer/Footer.component";
import SearchPage from "./components/SearchPage/SearchPage.component"

const App = () => {
  return (
    <>
      <Navbar />
      <SearchPage />
      <Footer />
    </>
  );
};

export default App;
