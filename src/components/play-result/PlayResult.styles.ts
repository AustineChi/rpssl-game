import styled from "styled-components";
import { device } from "../../utils";

export const Container = styled.div`
  max-width: 43.75rem;
  display: grid;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-transform: uppercase;
  align-items: center;
  box-sizing: border-box;
  @media only screen and ${device.sm} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ScoreWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  & > h3 {
    font-size: 2.5rem;
    margin: 2rem 0;
  }
  & > button {
    background-color: #f08a5d;
    padding: 0.45rem 2rem;
    border-radius: 0.45rem;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    border: none;
    &:hover {
      transform: translateY(-3px);
      box-shadow: rgb(0 0 0 / 30%) 0px 10px 20px;
    }
  }
`;

export const HeaderText = styled.div`
  font-size: 25px;
  margin: 20px 0;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
`;
