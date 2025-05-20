import React from "react";

function ServiceCard({ title, content }: { title: string; content: string }) {
  return (
    <div className="card flex flex-col items-start justify-end p-6 rounded-xl w-full h-[35rem] shadow-2xl mb-10 bg-black">
      <div className="text-white">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-300">{content}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
