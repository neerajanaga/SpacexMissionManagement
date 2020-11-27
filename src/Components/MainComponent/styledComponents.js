import styled from "styled-components";

export const Heading = styled.h1`
  margin-top: 0px;
  margin-left: 20px;
`;

export const Container = styled.div`
  background-color: lightgrey;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const MissionsList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  @media (min-width: 700px) and (max-width: 1023px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 700px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  box-sizing: border-box;
  margin: auto;
  flex-direction: row;
  max-width: 1440px;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 1440px) {
    justify-content: center;
  }
`;

export const Loader = styled.div`
  height: 100vh;
  width: calc(100% - 230px);
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 1440px) {
    width: 870px;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const FooterText = styled.span`
  font-weight: bold;
`;

export const DeveloperName = styled.span``;
