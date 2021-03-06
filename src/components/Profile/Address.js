import React from "react";

export const Address = (props) => {
  const myCountry = props.myCountry;
  const fullAddress = props.fullAddress;

  return (
    <>
      <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Address</h6>
      <div className="row">
        <div className="col-sm-7">
          <p className="m-b-10 f-w-600">{myCountry}</p>
          <h6 className="text-muted f-w-400" style={{ fontSize: "12px" }}>
            Tubli
          </h6>
        </div>
        <div className="col-sm-5">
          <p className="m-b-10 f-w-600">Office</p>
          <h6 className="text-muted f-w-400" style={{ fontSize: "12px" }}>
            {fullAddress}
          </h6>
        </div>
      </div>
      <ul className="social-link list-unstyled m-t-40 m-b-10">
        <li>
          <a
            href="#!"
            data-toggle="tooltip"
            data-placement="bottom"
            title=""
            data-original-title="facebook"
            data-abc="true"
          >
            <i
              className="mdi mdi-facebook feather icon-facebook facebook"
              aria-hidden="true"
            ></i>
          </a>
        </li>
        <li>
          <a
            href="#!"
            data-toggle="tooltip"
            data-placement="bottom"
            title=""
            data-original-title="twitter"
            data-abc="true"
          >
            <i
              className="mdi mdi-twitter feather icon-twitter twitter"
              aria-hidden="true"
            ></i>
          </a>
        </li>
        <li>
          <a
            href="#!"
            data-toggle="tooltip"
            data-placement="bottom"
            title=""
            data-original-title="instagram"
            data-abc="true"
          >
            <i
              className="mdi mdi-instagram feather icon-instagram instagram"
              aria-hidden="true"
            ></i>
          </a>
        </li>
      </ul>
    </>
  );
};
