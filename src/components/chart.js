import React, { useState } from "react";
import IMG from "../assests/arrow.jpg";
import Label from "../assests/label.jpg";
import Icon from "../assests/icon.jpg";

export default function Chart() {
  const [minimumScore, setMinimumScore] = useState(0);
  const [actualScore, setActualScore] = useState(0);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [percent, setPercent] = useState(0);
  const [startpercent, setStartpercent] = useState(0);
  const [over, setOver] = useState(false);
  const [same, setSame] = useState(false);
  

  return (
    <div className="m-20">
      <div className="block">
        <input
          id="start"
          name="start"
          type="number"
          onChange={(e) => {
            setStart(e.target.value);
          }}
          className="bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 m-2"
          placeholder="Start"
        />
        <input
          id="end"
          name="end"
          type="number"
          onChange={(e) => {
            setEnd(e.target.value);
          }}
          className="bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 m-2"
          placeholder="End"
        />
        <input
          id="minscore"
          name="minscore"
          type="number"
          onChange={(e) => {
            setMinimumScore(e.target.value);
          }}
          className="bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 m-2"
          placeholder="Minimum Score"
        />
        <input
          id="actualscore"
          name="actualscore"
          type="number"
          onChange={(e) => {
            setActualScore(e.target.value);
          }}
          className="bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 m-2"
          placeholder="Actual Score"
        />
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={() => {
            if (end !== 0 && end - start > 0) {
              setStartpercent(
                ((minimumScore - start) * 100) / (end - start) + 10
              );

              setPercent(
                (((actualScore - minimumScore) * 100) / (end - start)) * 0.8
              );
              if (((actualScore - minimumScore) * 100) / (end - start)<3){
                setPercent(3);
              }
              if(minimumScore === actualScore){
                setSame(true);
              }
              else{
                setSame(false);
              }
              if (actualScore > end) {
                setOver(true);
              } else {
                setOver(false);
              }
            }
          }}
        >
          Run
        </button>
      </div>
      <div className="mt-20">
        <div className="w-[50%] flex">
          <div
            className="bg-white h-[30px]"
            style={{ width: `${startpercent}%` }}
          >
            {" "}
          </div>
          <div
            className="bg-white h-[30px] flex justify-between"
            style={{ width: `${percent}%` }}
          >
            <div>{minimumScore}</div>
            {!same&&<div>{actualScore}</div>}
          </div>
        </div>
        <div className="w-[50%] flex">
          <div
            className="bg-white h-[40px]"
            style={{ width: `${startpercent}%` }}
          >
            {" "}
          </div>
          <div
            className="bg-white h-[20px] flex justify-between"
            style={{ width: `${percent}%` }}
          >
            <div>
              <img src={Icon} />
            </div>
            {!same&&<div>
              <img src={Icon} />
            </div>}
          </div>
        </div>
        <div className="w-[50%] flex">
          <div
            className="bg-white h-[40px]"
            style={{ width: `${startpercent}%` }}
          >
            {" "}
          </div>
          <div
            className="bg-gray-400 h-[40px]"
            style={{ width: `${percent}%` }}
          ></div>
          {over && (
            <div className="relative inline-block">
              <div className="after:content-[''] after:absolute after:left-full after:border-solid after:border-[20px] after:block after:border-l-gray-400 after:border-t-transparent after:border-b-transparent after:border-r-transparent"></div>
            </div>
          )}
        </div>
        <div className="w-[50%]">
          <img src={IMG} className="w-full" />
        </div>
        <div className="w-[50%]">
          <img src={Label} className="w-full" />
        </div>
      </div>
    </div>
  );
}
