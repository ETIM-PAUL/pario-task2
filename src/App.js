import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import { getData } from "./adapter/getData";
import "./App.css";
import GeneralInfo from "./components/generalInfo";
import StateCovidInfo from "./components/stateInfo";
import { setCovidInfo } from "./redux/getDataSlice";

function App() {
  const dispatch = useDispatch();
  useMemo(() => {
    getData().then((res) => dispatch(setCovidInfo(res)));
  }, [dispatch]);

  return (
    <div className="App">
      <div className="block md:flex justify-center h-[100vh]">
        <div className="md:w-[50%] md:bg-[green] bg-[#fff]">
          <GeneralInfo />
        </div>
        <div className="md:w-[50%] bg-[#fff]">
          <StateCovidInfo />
        </div>
      </div>
    </div>
  );
}

export default App;
