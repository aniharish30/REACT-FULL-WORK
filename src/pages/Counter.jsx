import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Counter = () => {
  //   var value = 5;

  const { values } = useContext(AppContext);

  var [value, setValue] = useState(5);

  var [name, setName] = useState("Ram");

  var [valid, setValid] = useState(true);

  return (
    <div>
      {/* // number */}
      <div className=" p-5">
        <div className="flex flex-col gap-5">
          <div>
            <h2 className=" font-bold text-2xl">Counter</h2>
            <h1 className=" font-body text-[35px]">{value}</h1>
          </div>
          <div className=" flex gap-5">
            <button
              className=" py-2 px-6 rounded-lg bg-red-600 text-white"
              onClick={() => {
                setValue(value - 1);
              }}
            >
              -
            </button>
            <button
              className=" py-2 px-6 rounded-lg bg-green-600 text-white"
              onClick={() => {
                setValue(value + 1); // re-render
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* //String */}
      <div className=" p-5">
        <div className="flex flex-col gap-5">
          <div>
            <h2 className=" font-bold text-2xl">String</h2>
            <h1 className=" font-body text-[35px]">{name}</h1>
          </div>
          <div className=" flex gap-5">
            <button
              className=" py-2 px-6 rounded-lg bg-red-600 text-white"
              onClick={() => {
                setName("Sam");
              }}
            >
              Change
            </button>
          </div>
        </div>
      </div>

      {/* //Boolean */}
      <div className=" p-5">
        <div className="flex flex-col gap-5">
          <div>
            <h2 className=" font-bold text-2xl">Boolean</h2>
            {/* // ? => true , : => false */}
            <h1 className=" font-body text-[35px]">{valid ? "ON" : "OFF"}</h1>
          </div>
          <div className=" flex gap-5">
            <button
              className={`py-2 px-6 rounded-lg  text-white ${valid ? "bg-green-600" : "bg-red-600"}`}
              onClick={() => {
                setValid(!valid);
              }}
            >
              {valid ? "OFF" : "ON"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
