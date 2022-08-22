import React, { useEffect, useState } from "react";
import { StatGroup } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Spinner } from "@chakra-ui/react";
import CardComponent from "./cardComponent";

const GeneralInfo = () => {
  const covidInfo = useSelector((state) => state.covidInfo.covidInfo);
  const [allInfo, setAllInfo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (Object.keys(covidInfo).length > 0) {
        setAllInfo(covidInfo);
        setLoading(false);
      }
    }, 1000);
  }, [covidInfo]);

  const {
    totalSamplesTested,
    totalConfirmedCases,
    totalActiveCases,
    discharged,
    death,
  } = allInfo;

  return (
    <div className="mt-24 mx-8 grid gap-6">
      <h1 className="text-2xl font-sans font-black">
        National Covid-19 Information
      </h1>
      {!loading ? (
        <>
          <StatGroup className="flex gap-5">
            <CardComponent
              value="total samples tested"
              number={totalSamplesTested}
              className="uppercase text-[aliceblue]"
            />
            <CardComponent
              value="total confirmed cases"
              number={totalConfirmedCases}
              className="uppercase text-[#0000cd]"
            />
          </StatGroup>

          <StatGroup className="flex gap-5">
            <CardComponent
              value="total active cases"
              number={totalActiveCases}
              className="uppercase text-[#ffff00]"
            />
            <CardComponent
              value="discharged"
              number={discharged}
              className="uppercase text-[green]"
            />
          </StatGroup>

          <CardComponent
            value="death"
            number={death}
            className="uppercase text-[red]"
          />
        </>
      ) : (
        <div>
          <Spinner />
          <h1>Loading Data</h1>
        </div>
      )}
    </div>
  );
};

export default GeneralInfo;
