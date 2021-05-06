import React from "react";

export const ProfilePhoto = () => {
  return (
    <div className="col-sm-4 bg-c-lite-green user-profile">
    <div className="card-block text-center text-white">
        <div className="m-b-25"> <img src="https://img.icons8.com/bubbles/100/000000/user.png" className="img-radius" alt="User-Profile-Image" /> </div>
        <h6 className="f-w-600">Abdulla Hasan</h6>
        <p>Web Designer</p> <i className="mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
    </div>
    </div>
  );
};