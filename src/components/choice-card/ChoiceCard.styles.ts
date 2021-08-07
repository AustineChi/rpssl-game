import styled from "styled-components";
import { device } from "../../utils";

type IconBoxInterface = {
  status?: boolean | undefined;
};

type ContainerInterface = {
  pointer?: boolean;
};

export const Container = styled.div<ContainerInterface>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 7rem;
  margin: 0.85rem 0;
  outline: 0;
  cursor: ${(props) => (props.pointer ? "pointer" : "")};
  & > p {
    font-size: 1rem;
    font-weight: bold;
  }
  @media only screen and ${device.sm} {
    width: 10rem;
    margin: 0;
  }
`;

export const IconBox = styled.div<IconBoxInterface>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  margin: 0.85rem;
  background-color: ${(props) =>
    props.status === undefined
      ? "#1a2546"
      : props.status
      ? "#5dba7d"
      : "#dc3454"};
  box-shadow: inset 0 -8px rgb(0 0 0 / 15%);
  @media only screen and ${device.sm} {
    width: 10rem;
    height: 10rem;
    margin: 1.25rem;
  }
  ${(props) =>
    props.status === undefined &&
    `
  &:hover {
    transform: translateY(-3px);
    box-shadow: rgb(0 0 0 / 30%) 0px 10px 20px;
  }
`}
`;

export const IconWrapper = styled.div`
  height: 70%;
  width: 70%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: inset 0 10px rgb(0 0 0 / 15%);
`;

export const Icon = styled.img`
  height: 70%;
  width: 70%;
`;
