import React, { useEffect, useState, useMemo } from "react";
import { Stat, StatLabel, StatNumber, StatGroup } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Spinner } from "@chakra-ui/react";

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
      {!loading > 0 ? (
        <>
          <StatGroup className="flex gap-5">
            <Stat className="bg-[#b8b5b6] py-5">
              <StatLabel className="uppercase text-[aliceblue]">
                total samples tested
              </StatLabel>
              <StatNumber>{totalSamplesTested}</StatNumber>
            </Stat>

            <Stat className="bg-[#b8b5b6] py-5">
              <StatLabel className="uppercase text-[#0000cd]">
                total confirmed cases
              </StatLabel>
              <StatNumber>{totalConfirmedCases}</StatNumber>
            </Stat>
          </StatGroup>
          <StatGroup className="flex gap-6">
            <Stat className="bg-[#b8b5b6] py-5">
              <StatLabel className="uppercase text-[#ffff00]">
                total active cases
              </StatLabel>
              <StatNumber>{totalActiveCases}</StatNumber>
            </Stat>

            <Stat className="bg-[#b8b5b6]  py-5">
              <StatLabel className="uppercase text-[green]">
                discharged
              </StatLabel>
              <StatNumber>{discharged}</StatNumber>
            </Stat>
          </StatGroup>

          <Stat className="bg-[#b8b5b6] py-5">
            <StatLabel className="uppercase text-[red]">death</StatLabel>
            <StatNumber>{death}</StatNumber>
          </Stat>
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
