import React, { useState } from "react";

const ReactNormalForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  console.log(`name: ${name} , email: ${email}`);

  return (
    <div className=" flex flex-col gap-5 p-10">
      <h1>React Normal Form</h1>
      <div className=" flex flex-col gap-3 ">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter you name..."
          className=" py-2 pl-1 rounded-lg outline-none border"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>

      <div className=" flex flex-col gap-5 ">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter you email..."
          className=" py-2 pl-1 rounded-lg outline-none border"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div>
        <button className=" py-2 px-6 rounded-lg bg-green-600 text-white">
          Register
        </button>
      </div>
    </div>
  );
};

export default ReactNormalForm;
