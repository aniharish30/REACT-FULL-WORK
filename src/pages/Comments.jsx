import React, { useState } from "react";

const Comments = () => {
  //   var [name, setName] = useState("");
  //   var [comment, setComment] = useState("");

  //   console.log("name:", name);
  //   console.log("comment:", comment);

  var [user, setUser] = useState({
    name: "",
    comment: "",
  });

  var [userData, setUserData] = useState([]); // {}, {}

  console.log("UserData:", userData);

  return (
    <div>
      <div className=" flex flex-col gap-5 p-5">
        <div className=" flex flex-col gap-3">
          <label htmlFor="name">Name:</label>
          <input
            className=" py-2 pl-1 rounded-lg outline-none border"
            placeholder="Enter you name..."
            type="text"
            name="name"
            id="name"
            onChange={(e) => {
              // setName(e.target.value);
              // Direct Value
              setUser({ ...user, name: e.target.value });
              // callback function
              //   setUser((prev) => {
              //     return { ...prev, name: e.target.value };
              //   });
            }}
          />
        </div>

        <div className=" flex flex-col gap-3">
          <label htmlFor="comment">Comment:</label>
          <input
            type="text"
            name="comment"
            id="comment"
            className=" py-2 pl-1 rounded-lg outline-none border"
            placeholder="Enter your comment..."
            onChange={(e) => {
              // setComment(e.target.value);

              // direct Value
              setUser({ ...user, comment: e.target.value });

              //   setUser((prev) => {
              //     return { ...prev, comment: e.target.value };
              //   });
            }}
          />
        </div>

        <div>
          <button
            onClick={() => {
              // direct value
              //   setUserData([user]);
              //   callback
              setUserData((prev) => {
                return [...prev, user];
              });
            }}
            className=" w-full py-2 px-6 rounded-lg bg-green-600 text-white"
          >
            Post
          </button>
        </div>
      </div>

      <div className=" grid grid-cols-2 md:grid-cols-6 gap-5">
        {userData.map((item, i) => {
          return (
            <div key={i} className=" flex flex-col gap-2">
              <h1 className=" font-body">{item?.name}</h1>
              <p>{item?.comment}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
