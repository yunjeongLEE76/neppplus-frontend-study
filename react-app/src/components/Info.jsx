import { useState } from "react";

const Info = () => {
  const [name, setName] = useState("김민준");
  const [nickname, setNickname] = useState("velopert");
  return (
    <>
      <div>
        <input onChange={(e) => setName(e.target.value)} value={name} />
        <input onChange={(e) => setNickname(e.target.value)} value={nickname} />
      </div>
      <h1>이름: {name}</h1>
      <h1>닉네임: {nickname}</h1>
    </>
  );
};

export default Info;
