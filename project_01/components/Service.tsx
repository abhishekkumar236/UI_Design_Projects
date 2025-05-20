import React from "react";
import ServiceCard from "./ServiceCard";

function Service() {
  const cardData = [
    {
      title: "AI Development",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt itaque id laborum voluptatem illum, nisi ipsa placeat voluptatum eveniet minus",
    },
    {
      title: "AI Development",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt itaque id laborum voluptatem illum, nisi ipsa placeat voluptatum eveniet minus!",
    },
    {
      title: "AI Development",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt itaque id laborum voluptatem illum, nisi ipsa placeat voluptatum eveniet minus",
    },
  ];
  return (
    <div className="w-full flex gap-10">
      {cardData.map((card, index) => (
        <ServiceCard key={index} title={card.title} content={card.content} />
      ))}
    </div>
  );
}

export default Service;
