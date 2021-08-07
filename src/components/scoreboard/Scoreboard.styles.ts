import styled from "styled-components";
import { device } from "../../utils";

export const Container = styled.aside`
  color: #fff;
  width: 100%;
  grid-area: sidebar;
  background-image: linear-gradient(to right, #1c9bba, #2cb6e3);
  padding: 20px 0;
  box-sizing: border-box;
  position: relative;
  & > div.score-footer {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    text-align: center;
    margin-top: 2rem;
    width: 100%;
    & > div {
      & > h4 {
        font-weight: 700;
        font-size: 1rem;
        line-height: 2;
      }
      & > p {
        font-size: 0.825rem;
      }
    }
  }
  @media only screen and ${device.sm} {
    border-top-right-radius: 80px;
    border-bottom-left-radius: 80px;
    overflow-y: scroll;
    height: 680px;
    margin: 2rem 1rem;
    & > div.score-footer {
      position: absolute;
      bottom: 0;
    }
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  &:hover {
    width: 90%;
    margin-left: 10%;
    color: #3f5efb;
    background: #fff;
    outline: none;
    position: relative;
    background-color: #f5f5f5;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
`;

export const Icon = styled.img`
  height: 30px;
  width: 30px;
  margin: 10px auto;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 1rem 0;
  //   margin-left: 10%;
  padding-right: 1rem;
  & > span {
    font-weight: 700;
    font-size: 1.5rem;
    margin: 0 20px;
    text-align: center;
  }
`;

export const Text = styled.p`
  font-size: 0.825rem;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
`;
