import React, { useState } from "react";
import Button from "./Button";

const Problem1 = () => {
  const [isTaskStatus, setTaskStatus] = useState(null);

  const [storeCart, setStoreCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const status = e.target.status.value;

    console.log(name, status);

    if (!status) {
      return alert("Please Provide work status");
    }

    const obj = { name, status };
    console.log(obj);

    const newArray = [...storeCart, obj];
    localStorage.setItem("cart", JSON.stringify(newArray));

    const cart = localStorage.getItem("cart");
    setStoreCart(JSON.parse(cart));
  };

  const tasks = JSON.parse(localStorage.getItem("cart"));
  let allTasks = tasks;

  // console.log(isTaskStatus);

  if (isTaskStatus === "ACTIVE") {
    allTasks = allTasks.filter((t) => t.status === "Active");
  }
  if (isTaskStatus === "COMPLETE") {
    allTasks = allTasks.filter((t) => t.status === "Complete");
  }

  return (
    <>
      <div className="max-w-5xl">
        <Button />

        <div>
          <h1 className="text-2xl font-semibold text-center my-5">Problem 1</h1>
          <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-3">
            <input
              required
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered input-info w-full max-w-xs"
            />

            <select
              name="status"
              id="status"
              className="select select-info w-full max-w-xs"
            >
              <option value="">select states</option>
              <option value="Active">Active</option>
              <option value="Complete">Complete</option>
            </select>

            <button className="btn btn-primary">Submit</button>
          </form>

          <div className="my-5">
            <button
              onClick={(e) => setTaskStatus(e.target.innerText)}
              className="btn btn-primary btn-sm rounded-md"
            >
              All
            </button>
            <button
              onClick={(e) => setTaskStatus(e.target.innerText)}
              className="btn btn-primary btn-sm rounded-md mx-5"
            >
              Active
            </button>
            <button
              onClick={(e) => setTaskStatus(e.target.innerText)}
              className="btn btn-primary btn-sm rounded-md"
            >
              Complete
            </button>
          </div>

          <div>
            <table>
              <thead>
                <tr>
                  <th className="font-bold text-lg">Name</th>
                  <th className="font-bold text-lg">Status</th>
                </tr>
              </thead>
              <tbody>
                {allTasks?.map((task, i) => (
                  <tr key={i}>
                    <td>{task.name}</td>
                    <td>{task.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Problem1;
