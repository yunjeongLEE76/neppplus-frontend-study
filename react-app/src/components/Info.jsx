import { useEffect, useState } from "react";

const Info = () => {
  const [name, setName] = useState("김민준");
  const [nickname, setNickname] = useState("velopert");

  useEffect(() => {
    console.log("마운트될 때만 실행됩니다.");
    return () => {
      console.log("언마운트될 떄 실행됩니다.");
    };
  }, []);

  useEffect(() => {
    console.log("랜더링이 완료되었습니다!"); //최초로 1번으로 실행//다음 마지막 3번
    console.log({ name, nickname });
    return () => {
      console.log("cleanup"); //변경되면 2번으로 실행
      console.log(name);
    };
  }, [name]); //name값이 변경되면
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
