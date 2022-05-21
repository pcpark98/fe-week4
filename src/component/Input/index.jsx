import React, { useState } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 500px;
  height: 50px;
`;

const ViewWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  width: 500px;
  height: 50px;
`;

function InputSample() {
  //이 페이지에서 useState를 단 한번만 사용한다면 선착순 한분에게 커피한잔 사드립니다!
  // 요 위치에 useState 구문이 들어가면 됩니다!

  // useState 여러개 사용.
  /*const [name, setName] = useState();
  const [nickname, setNickName] = useState();*/

  // useState 한 개만 사용.
  const [input, setInput] = useState([]);

  const onChange = (e) => {
    // console.log(e.target.name); // e.target.value 가 무엇일까요??
    // 여기에 코드를 작성하여 해결합니다!
    // onChange 함수를 읽히고 이 함수가 사용될때 useState 가 사용되면 되겠죠?
    //console.log(e.target.value);

    /* // useState 여러개 사용.
    if (e.target.name === "name") {
      setName(e.target.value);
    } else {
      setNickName(e.target.value);
    }*/

    // useState 한 개만 사용.
    var newInput = [...input];
    console.log(newInput);
    if (e.target.name === "name") {
      newInput[0] = e.target.value;
    } else {
      newInput[1] = e.target.value;
    }
    console.log(newInput);
    setInput(newInput);
  };

  const onReset = () => {
    // 여기는 reset 버튼을 눌렀을때 발생하는 함수입니다!!

    // useState 여러개 사용.
    // setName(null);
    // setNickName(null);

    // useState 한 개만 사용.
    setInput([null, null]);
  };

  return (
    <div>
      <InputWrapper>
        <input
          name="name"
          placeholder="이름"
          onChange={onChange}
          // useState 여러개 사용.
          // value={name}

          // useState 한 개만 사용.
          value={input[0]}
        />
        <input
          name="nickname"
          placeholder="닉네임"
          onChange={onChange}

          // useState 여러개 사용.
          // value={nickname}
        />
        <button onClick={onReset}>초기화</button>
      </InputWrapper>

      {/* useState 여러개 사용.
      <ViewWrapper>
        값 : {name == null ? "이름이 없습니다." : name}:(
        {nickname == null ? "별명이 없습니다." : nickname})
      </ViewWrapper> */}

      {/* useState 한 개만 사용. */}
      <ViewWrapper>
        값 : {input[0] == null ? "이름이 없습니다." : input[0]}:(
        {input[1] == null ? "별명이 없습니다." : input[1]})
      </ViewWrapper>
    </div>
  );
}

export default InputSample;
