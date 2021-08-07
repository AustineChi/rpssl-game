import styled from "styled-components";
import { device } from "../../utils";

export const Container = styled.section`
  max-width: 700px;
  display: grid;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  @media only screen and ${device.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and ${device.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Text = styled.h2`
  text-align: left;
  margin: 1rem 10%;
  font-size: 1.5rem;
`;
