import React, { useEffect, useState } from "react";

const Problem1 = () => {
  const [storeCart, setStoreCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const status = e.target.status.value;
    const obj = { name, status };

    const newArray = [...storeCart, obj];
    localStorage.setItem("cart", JSON.stringify(newArray));

    const cart = localStorage.getItem("cart");
    setStoreCart(JSON.parse(cart));
  };

  const tasks = JSON.parse(localStorage.getItem("cart"));

  return (
    <div>
      <h1 className="text-2xl text-center">Problem 1</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          name="name"
          type="text"
          placeholder="Name"
          className="input input-bordered input-info w-full max-w-xs"
        />
        <input
          required
          name="status"
          type="text"
          placeholder="Status"
          className="input input-bordered input-info w-full max-w-xs"
        />

        <button className="btn btn-primary">Submit</button>
      </form>

      <button className="btn btn-primary btn-sm rounded-md">All</button>
      <button className="btn btn-primary btn-sm rounded-md">Active</button>
      <button className="btn btn-primary btn-sm rounded-md">Complete</button>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{task.name}</td>
                <td>{task.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Problem1;
