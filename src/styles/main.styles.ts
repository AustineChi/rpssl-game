import styled from "styled-components";
import { device } from "../utils";

type FlexContainerInterface = {
  column?: boolean;
};

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #f5f5f5;
  color: #000;
  display: grid;
  grid-template-areas:
    "header"
    "main"
    "sidebar";
  @media only screen and ${device.sm} {
    grid-template-columns: 3fr 5fr;
    grid-template-areas:
      "sidebar header"
      "sidebar main";
  }
  @media only screen and ${device.lg} {
    grid-template-columns: 1fr 4fr;
  }
`;

export const Main = styled.section`
  grid-area: main;
  padding: 2rem 1rem;
  text-align: center;
  position: relative;
  @media only screen and ${device.sm}{
   height: 90vh;
   & > .loading {
      position: absolute;
      top: 50%;
      left: 45%;
   }

`;

export const Header = styled.section`
  grid-area: header;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  box-sizing: border-box;
  height: 10vh;
  & > h1 {
    margin: 30px auto;
    color: rgb(224, 177, 21);
    background: #000;
    padding: 5px 20px;
    width: 300px;
  }
`;

export const Title = styled.h1`
  color: #e0b115;
  background: #000;
  padding: 0 30px;
`;

export const FlexContainer = styled.div<FlexContainerInterface>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
`;

export const ResetButton = styled.button`
  color: #000;
  border-radius: 1rem;
  text-transform: uppercase;
  font-weight: 700;
  background-color: #fff6bb;
  padding: 1rem 2rem;
  position: absolute;
  right: 20px;
  bottom: 30px;
  border: none;
  cursor: pointer;
  &:hover {
    transform: translateY(-10px);
    box-shadow: rgb(0 0 0 / 30%) 0px 10px 20px;
  }
`;
