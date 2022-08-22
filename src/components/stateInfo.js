import React, { useEffect, useState } from "react";
import { Select } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { StatGroup, Spinner } from "@chakra-ui/react";
import CardComponent from "./cardComponent";

const StateCovidInfo = () => {
  const statesCovidInfo = useSelector(
    (state) => state.covidInfo.covidInfo.states
  );
  const [statesInfo, setStatesInfo] = useState([]);
  const [selectedStateId, setSelectedStateId] = useState(null);
  let stateInfo = [];
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (statesCovidInfo?.length > 0) {
        setStatesInfo(statesCovidInfo);
      }
    }, 1000);
  }, [statesCovidInfo]);

  const getStateCovidInfo = (e) => {
    setSelectedStateId(e.target.value);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  stateInfo = statesInfo?.filter((state) => state._id === selectedStateId);

  return (
    <div>
      <div className="mt-24 mx-12 grid gap-6">
        <h1 className="text-2xl font-sans font-black">
          State Covid-19 Information
        </h1>
        <div className="select">
          <Select onChange={(e) => getStateCovidInfo(e)}>
            <option disabled>Select State</option>
            {statesInfo?.map((state) => {
              return (
                <option key={state._id} value={state._id}>
                  {state.state}
                </option>
              );
            })}
          </Select>
        </div>

        {selectedStateId !== null && (
          <div className="state-info-cards">
            {!loading ? (
              <>
                <StatGroup className="flex gap-5">
                  <CardComponent
                    value="confirmed cases"
                    number={stateInfo[0].confirmedCases}
                    className="uppercase  text-[#0000cd]"
                  />
                  <CardComponent
                    value="cases on admission"
                    number={stateInfo[0].casesOnAdmission}
                    className="uppercase text-[#ffff00]"
                  />
                </StatGroup>

                <StatGroup className="flex gap-5">
                  <CardComponent
                    value="discharged"
                    number={stateInfo[0].discharged}
                    className="uppercase text-[green]"
                  />
                  <CardComponent
                    value="death"
                    number={stateInfo[0].death}
                    className="uppercase text-[red]"
                  />
                </StatGroup>
              </>
            ) : (
              <div>
                <Spinner />
                <h1>Loading Data</h1>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default StateCovidInfo;
