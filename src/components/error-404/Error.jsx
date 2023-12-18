import styled from "styled-components";

export const Error = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
  `;
  const Title = styled.p`
    font-size: 15px;
    font-weight: 600;
  `;
  const SubTitle = styled.p`
    font-size: 13px;
    font-weight: 400;
    color: #a7a7a7;
  `;
  const ButtonWrapper = styled.button`
    background-color: #6631f7;
    color: #fff;
    border: none;
    padding: 10px 130px;
    border-radius: 15px;
    font-size: 13px;
    font-weight: 600;
    margin-top: 40px;
    cursor: pointer;
  `;

  return (
    <Container>
      <img
        src="https://app.walee.pk/assets/walee/logo/walee.png"
        alt="logo.png"
      />
      <div style={{ marginTop: "50px" }} />
      <img src="/error-404.svg" alt="erro.png" />
      <Title>Oooops!</Title>
      <Title>Page Not Found</Title>
      <SubTitle>
        This page doesn’t exist or was removed! We suggest you back to home.
      </SubTitle>
      <ButtonWrapper>Back to Home</ButtonWrapper>
    </Container>
  );
};
