import React from "react";

const Skills = () => {
  return (
    <div className="flex flex-col mt-[-250px] mr-[300px] ">
      <div className="pb-2 text-center font-inter">
        <h2 className="text-4xl font-bold">Skills</h2>
      </div>
      <div className="grid items-center grid-cols-3 gap-4 font-inter">
        <div className="w-[250px] h-[150px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          Reactjs
        </div>
        <div className="w-[250px] h-[150px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          NEXT.JS
        </div>
        <div className="w-[250px] h-[150px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          FIREBASE
        </div>
        <div className="w-[250px] h-[150px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          GRAPHQL
        </div>
        <div className="w-[250px] h-[150px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          TYPESCRIPT
        </div>
        <div className="w-[250px] h-[150px] bg-[#1e293b] p-4 rounded-lg flex justify-center items-center text-3xl font-bold">
          TAILWINDCSS
        </div>
      </div>
    </div>
  );
};

export default Skills;