import React from "react";

const Column = ({ childrens, title }) => {
  return (
    <div className="column">
      <h2>{title}</h2>
      <div className="column-body">{childrens}</div>
    </div>
  );
};

export default Column;
