import React from "react";
import "../App.css";

import Card from './Card';

const Column = ({ childrens, title, backgroundColor }) => {
  return (
    <div className={`column ${backgroundColor}`}>
      <h2>{title}</h2>
      <div className="column-body">
        {childrens.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} backGroundColor="bc-green" />
        ))}
      </div>
    </div>
  );
};

export default Column;
