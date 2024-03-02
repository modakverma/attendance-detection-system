import { useRouter } from "next/router";
import React from "react";

const Sidebar = () => {
  const router = useRouter();
  const handleClick = (year: number) => {
    router.push(`#year=${year}`);
  };
  return (
    <div className="fixed left-0 top-0 bottom-0 w-[200px] bg-slate-200/20 flex flex-col p-8 border-r border-slate-200/20 uppercase">
      <h1 className=" mb-20">select year</h1>
      <div className="flex flex-col gap-8 items-center">
        <div
          onClick={() => handleClick(1)}
          className="border-b rounded-none cursor-pointer hover:bg-slate-200/10 transition px-8 py-2 "
        >
          year 1
        </div>
        <div
          onClick={() => handleClick(2)}
          className="border-b rounded-none cursor-pointer hover:bg-slate-200/10 transition px-8 py-2 "
        >
          year 2
        </div>
        <div
          onClick={() => handleClick(3)}
          className="border-b rounded-none cursor-pointer hover:bg-slate-200/10 transition px-8 py-2 "
        >
          year 3
        </div>
        <div
          onClick={() => handleClick(4)}
          className="border-b rounded-none cursor-pointer hover:bg-slate-200/10 transition px-8 py-2 "
        >
          year 4
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
