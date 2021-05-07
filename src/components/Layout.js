import React from "react";

export default function Layout(props) {
  return (
    <>
      <div>My Header</div>
      {props.children}
      <div>My Footer</div>
    </>
  );
}
