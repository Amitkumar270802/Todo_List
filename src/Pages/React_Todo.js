import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const React_Todo = () => {
  const [input, setInput] = useState();
  const [users, SetUsers] = useState([]);
  const [up, setUp] = useState(false);
  const [editid, setEditid] = useState();

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (input) => {
    if (input !== "") SetUsers((prev) => [...prev, input]);
    console.log(users);
    setInput("");
  };

  const deleteDandler = (id) => {
    let x = users.filter((user, index) => index !== id);
    SetUsers(x);
  };

  const editButton = () => {
    const updatedUsers = users.map((user, index) =>
      index === editid ? input : user
    );
    SetUsers(updatedUsers);
    setInput("");
    setUp(false);
  };

  const editHandler = (id) => {
    setUp(true);
    setInput(users[id]);
    setEditid(id);
  };

  return (
    <div className="bg-sky-300 min-h-screen">
      <div className="flex justify-center p-10 gap-x-2">
        <input
          name="name"
          value={input}
          onChange={changeHandler}
          placeholder="Enter Your Task"
          className=" rounded-md p-4 w-[380px] border-none bg-black text-white "
        />
        {!up && (
          <button
            onClick={() => submitHandler(input)}
            className="bg-blue-900 text-white p-4 rounded-md w-[100px]"
          >
            Add
          </button>
        )}
        {up && (
          <button
            onClick={() => editButton(input)}
            className={`bg-blue-900 text-white p-4 rounded-md`}
          >
            Update
          </button>
        )}
      </div>
      <div>
        {users.map((item, id) => {
          return (
            <div className="w-[500px] mx-auto flex justify-center">
              <div className="flex justify-between rounded-lg w-full bg-sky-200 p-4 m-2">
                <div className="text-black text-xl ml-5">{item}</div>
                <div className="flex gap-x-4">
                  <MdDelete
                    className="bg-black text-blue-200 text-3xl rounded-full p-1 "
                    onClick={() => deleteDandler(id)}
                  />
                  <CiEdit
                    className="bg-black text-blue-200 text-3xl rounded-full p-1 "
                    onClick={() => editHandler(id)}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default React_Todo;
