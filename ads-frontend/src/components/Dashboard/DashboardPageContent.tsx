import React from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const DashboardPageContent = ({ data }: { data: any }) => {
  console.log("studentta", data);
  return (
    <div className="flex flex-col w-full gap-5 text-center">
      <div className="grid grid-cols-5 w-full gap-5 items-center justify-between bg-green-200/20 py-3 px-10  border border-green-300/10">
        <div>Name</div>
        <div>Branch</div>
        <div>Year</div>
        <div>Status</div>
        <div>Total Attendance</div>
      </div>
      {data?.map((student: any, index: number) => {
        return (
          <motion.div
            initial={{
              opacity: 0,
              y: 120,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.2 * index,
              },
            }}
            key={index}
            className="grid grid-cols-5 w-full gap-5 items-center bg-slate-200/10 py-3 px-10 rounded-lg border border-slate-300/10"
          >
            <div>{student?.name}</div>
            <div>{student?.major}</div>
            <div>{student?.year}</div>
            <div
              className={twMerge([
                "border py-2 px-4 rounded-lg border-red-200/30 bg-red-500/30",
                student?.standing === "G" &&
                  "bg-green-300/30 border-green-200/30",
              ])}
            >
              {student?.standing === "G" ? "Present" : "Absent"}
            </div>
            <div>{student["total attendance"]}</div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default DashboardPageContent;
