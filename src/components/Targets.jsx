import React from "react";
import { targets } from "./constants/items";

const Item = ({ value }) => {
  return (
    <div className="rounded-3xl p-1 flex items-center gap-1 bg-[#798f9f]/20">
      <div className="w-2 h-2 rounded-full bg-[#2a106b]"></div>
      <p className="text-xs text-[#798f9f]">Target {value}</p>
    </div>
  );
};

const Targets = () => {
  return (
    <div className="flex flex-wrap gap-1">
      {targets.map((target, index) => (
        <Item value={target.value} key={index} />
      ))}
    </div>
  );
};

export default Targets;
