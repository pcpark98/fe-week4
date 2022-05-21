import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CalculatorWrapper = styled.div`
  width: 500px;
  height: 600px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 100px;
`;

const StyledInput = styled.input`
  width: 85%;
  height: 70px;
  border: 1px solid grey;
  text-align: right;
`;

const ButtonWrapper = styled.div`
  width: 85%;
  height: 400px;
  border: 1px solid grey;

  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
`;

const StyledButton = styled.button`
  border: 1px solid grey;
`;

let input = "";

const Calculator = () => {
  const [value, setValue] = useState("");

  //   var inputNumbers = [];
  //   var operator = "";
  // 왜 여기에다가 작성하면 안되는거지?

  const onClickNumbers = (event) => {
    input = input + event.target.value;
    setValue(value + event.target.value);
  };

  const onClickOperators = (event) => {
    if (event.target.value === "@") {
      input = "";
      setValue("");
    } else {
      input = input + event.target.value;
      setValue("");
    }
  };

  const onClickEquals = () => {
    let number = "";
    let numbers = [];
    let operators = [];

    for (let i = 0; i < input.length; i++) {
      if (!isNaN(input[i])) {
        number = number + input[i];
      } else {
        numbers.push(number);
        number = "";
        operators.push(input[i]);
      }
    }
    numbers.push(number);
    number = "";

    let count = operators.length;
    let operator = "";
    let result;
    for (let i = 0; i < count; i++) {
      operator = operators.shift();
      if (operator === "/") {
        result = Number(numbers.shift()) / Number(numbers.shift());
      } else if (operator === "x") {
        result = Number(numbers.shift()) * Number(numbers.shift());
      } else if (operator === "-") {
        result = Number(numbers.shift()) - Number(numbers.shift());
      } else if (operator === "+") {
        result = Number(numbers.shift()) + Number(numbers.shift());
      }
      numbers.unshift(result);
    }
    setValue(Number(numbers[0]));
  };

  return (
    <CalculatorWrapper>
      <StyledInput value={value} type="number" />
      <ButtonWrapper>
        <StyledButton value={7} onClick={onClickNumbers}>
          7
        </StyledButton>
        <StyledButton value={8} onClick={onClickNumbers}>
          8
        </StyledButton>
        <StyledButton value={9} onClick={onClickNumbers}>
          9
        </StyledButton>
        <StyledButton value={"/"} onClick={onClickOperators}>
          /
        </StyledButton>
        <StyledButton value={4} onClick={onClickNumbers}>
          4
        </StyledButton>
        <StyledButton value={5} onClick={onClickNumbers}>
          5
        </StyledButton>
        <StyledButton value={6} onClick={onClickNumbers}>
          6
        </StyledButton>
        <StyledButton value={"x"} onClick={onClickOperators}>
          x
        </StyledButton>
        <StyledButton value={1} onClick={onClickNumbers}>
          1
        </StyledButton>
        <StyledButton value={2} onClick={onClickNumbers}>
          2
        </StyledButton>
        <StyledButton value={3} onClick={onClickNumbers}>
          3
        </StyledButton>
        <StyledButton value={"-"} onClick={onClickOperators}>
          -
        </StyledButton>
        <StyledButton value={"@"} onClick={onClickOperators}>
          @
        </StyledButton>
        <StyledButton value={0} onClick={onClickNumbers}>
          0
        </StyledButton>
        <StyledButton value={"+"} onClick={onClickOperators}>
          +
        </StyledButton>
        <StyledButton value={"="} onClick={onClickEquals}>
          =
        </StyledButton>
      </ButtonWrapper>
    </CalculatorWrapper>
  );
};

export default Calculator;
