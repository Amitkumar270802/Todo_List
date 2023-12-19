import React from "react";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, editUser } from "../redux/UserSlice";
import { CiEdit } from "react-icons/ci";

const React_Redux_Toolkit = () => {
  // The useDispatch hook is used to update the state of the component and return a new state.
  const dispatch = useDispatch();

  // to take name of user as input
  const [input, setInput] = useState();

  // The useSelector hook is used to extract the state of a component from the redux store using the selector function.
  const data = useSelector((state) => {
    return state.users;
    // users is same as pass in store
  });

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (input) => {
    if (input != "") dispatch(addUser(input));
    setInput("");
  };

  const deleteDandler = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div className="bg-orange-300 min-h-screen">
      <div className="flex justify-center p-10 gap-x-2">
        <input
          name="name"
          value={input}
          onChange={changeHandler}
          placeholder="Enter Your Task"
          className=" rounded-md p-4 w-[380px] border-none bg-black text-white "
        />
        <button
          onClick={() => submitHandler(input)}
          className="bg-blue-900 text-white p-4 rounded-md w-[100px]"
        >
          Add 
        </button>
      </div>
      <div>
        {data.map((item, id) => {
          return (
            <div className="w-[500px] mx-auto flex justify-center">
              <div className="flex justify-between rounded-lg w-full bg-orange-200 p-4 m-2">
                <div className="text-black text-xl ml-5">{item}</div>
                <div className="flex gap-x-6">
                  <MdDelete
                    className="bg-black text-blue-200 text-3xl rounded-full p-1 "
                    onClick={() => deleteDandler(id)}
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

export default React_Redux_Toolkit;
