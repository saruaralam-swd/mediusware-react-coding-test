import React from "react";

const Problem1 = () => {
  return (
    <div>
      <h1 className="text-2xl text-center">Problem 1</h1>
      <form>
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered input-info w-full max-w-xs"
        />
        <input
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
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Kamal</td>
              <td>Done</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Problem1;
