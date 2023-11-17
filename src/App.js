import React from "react";
import Navbar from "./components/navbar/Navbar.component";
import styled from "styled-components";
import TrendingTable from "./components/trending_table/trending_table.component";

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
      <Navbar />
      <Content>
        <PrimaryHeading>Ask Walee!</PrimaryHeading>
        <div></div>
        <SecondaryHeading>
          Get a 360 degree holistic view of each Happening, Brand or Event in
          the world
        </SecondaryHeading>
        <TrendingTable />
      </Content>
    </>
  );
};

export default App;
