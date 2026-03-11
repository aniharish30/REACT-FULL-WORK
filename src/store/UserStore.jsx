import React, { createContext } from "react";

const UserStore = createContext({
  name: "Revamp",
  batch: "25",
});

export default UserStore;
