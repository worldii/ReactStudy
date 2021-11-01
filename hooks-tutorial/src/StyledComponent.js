import React from "react";
import styled, { css } from "styled-components";

const Box = styled.div`
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
  width : 900;
  margin : 0 auto;
  @ media (max-width : 700 px){
    width : 768px;
  }
  @ media ( max-width : 368px) {
    width : 100%;
  }
`;

const Button = styled.button`
  background: white;
  color: black;
  &: hover {
    background: rgba(255, 255, 0.9);
  }
  ${(props) =>
    props.inverted &&
    css`
      background: none;
      color: white;

      &:hover {
        background: white;
        color: black;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => {
  return (
    <Box color="black">
      <Button>안녕하세요</Button>
      <Button inverted={true}> 테두리만</Button>
    </Box>
  );
};

export default StyledComponent;
