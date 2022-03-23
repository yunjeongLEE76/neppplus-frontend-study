import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "리액트";
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16,
  };

  return (
    <>
      {name === "리액트" ? (
        <h1>리액트 입니다.</h1>
      ) : (
        <h2>리액트가 아닙니다.</h2>
      )}
      {name === "리액트" && <h1>리액트입니다.</h1>}

      <div style={style} className="">
        {name}
      </div>
    </>
  );
}

export default App;
