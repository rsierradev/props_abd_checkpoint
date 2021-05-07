import React from "react";
export const FullName = ({ firstName, alertFn, dataAPI }) => {
  return (
    <>
      <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
      <div className="row">
        <div className="col-sm-7">
          <p className="m-b-10 f-w-600">Name</p>
          <h6 className="text-muted f-w-400">{firstName}</h6>
          {dataAPI.map((el) => (
            <div>{el.name}</div>
          ))}
        </div>
        <div className="col-sm-7">
          <p className="m-b-10 f-w-600">Email</p>
          <h6 className="text-muted f-w-400">abdulla@flashh.co.uk</h6>
        </div>
        <div className="col-sm-5">
          <p className="m-b-10 f-w-600">Phone</p>
          <h6 className="text-muted f-w-400">32224585</h6>
        </div>
        <button onClick={alertFn}>Click Me!</button>
      </div>
    </>
  );
};
