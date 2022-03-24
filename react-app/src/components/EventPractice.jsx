import { useState } from "react";

const EventPractice = () => {
  //   const [message, setMessage] = useState("");
  //   const [userName, setUserName] = useState("");

  const [form, setForm] = useState({
    userName: "",
    message: "",
  });

  const { userName, message } = form;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };
  //   const handleChangeMessage = (e) => {
  //     setMessage(e.target.value);
  //   };
  const handleClick = () => {
    alert(userName + ":" + message);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input onChange={handleChange} placeholder="사용자명" name="userName" />
      <input
        onChange={handleChange}
        placeholder="아무거나 입력해 보세요"
        name="message"
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleClick}>확인</button>
    </div>
  );
};

export default EventPractice;
