import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  function GetAllComplaint() {
    const myHeaders = new Headers();
    myHeaders.set("Content-Type", "text/html");
    myHeaders.set("Access-Control-Allow-Origin", "https://localhost:5173/");
    myHeaders.set("Access-Allow-Headers", "Origin");

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://127.0.0.1:8000/api/");

    xhr.onload = function () {
      if (xhr.status === 200) {
        setData(JSON.parse(xhr.responseText));
      } else {
        console.log("Error");
      }
    };
    xhr.send();
  }

  const [data, setData] = useState(null);

  return (
    <>
      {GetAllComplaint()}
      {data ? <div>{WriteJson(data)}</div> : <div></div>}
    </>
  );
}

export default App;
