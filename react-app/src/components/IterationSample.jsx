import { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState(["눈사람", "얼음", "눈", "바람"]);
  const [message, setMessage] = useState("");

  const handleClick = () => {
    const newNames = [...names, message];

    setNames(newNames);
    setMessage("");
  };
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      <input onChange={handleChange} name="message" />
      <button onClick={handleClick}>추가</button>
      <ul>
        {names.map((name, index) => (
          <li key={index}>
            {index}: {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IterationSample;
