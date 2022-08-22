import React, { useEffect } from "react";
import { getData } from "./adapter/getData";
import "./App.css";

function App() {
  useEffect(() => {
    getData().then((res) => console.log(res));
  }, []);

  return (
    <div className="App">
      <div className="flex justify-center h-[100vh]">
        <div className="w-[50%] bg-[#e15052]"></div>
        <div className="w-[50%] bg-[#b8b5b6]"></div>
      </div>
    </div>
  );
}

export default App;
