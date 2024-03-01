"use client";

import PersonAttendanceBlock from "@/components/attendance/personAttendanceBlock";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { YearContext } from "@/components/common/Sidebar";

export default function Home() {
  const { year, setYear } = useContext<{
    year: number;
    setYear: React.Dispatch<React.SetStateAction<number>>;
  }>(YearContext);

  const [firstYearStudentesData, setFirstYearStudentesData] = useState<any>([]);
  const [dataTobeSorted, setDataToBeSorteed] = useState<any>(null);

  const sortDataLatest = (studentData: any) => {
    const studentDataVal: any = Object.values(studentData);
    studentDataVal.sort((a: any, b: any) => {
      const prev: any = new Date(a.last_attendance_time);
      const curr: any = new Date(b.last_attendance_time);
      return prev - curr;
    });
    return studentDataVal;
  };

  const sortMaxAttendance = (studentData: any) => {
    const studentDataVal = Object.values(studentData);
    studentDataVal.sort((a: any, b: any) => {
      const prev = a["total attendance"];
      const curr = b["total attendance"];
      return curr - prev;
    });
    console.log(
      "student data to be sorted on max attendance: ",
      studentDataVal
    );
    setFirstYearStudentesData(studentDataVal);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:4500/year=${year}`);
        if (!response.ok) {
          console.log("Error");
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        const dataStudent = result.data;
        const sortedData = sortDataLatest(dataStudent);
        setFirstYearStudentesData(sortedData);
        setDataToBeSorteed(dataStudent);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [year]);
  console.log("firstYearStudentesData", firstYearStudentesData);
  return (
    <Tabs height="full" padding={2} variant="soft-rounded" colorScheme="blue">
      <div className="flex flex-row gap-2 absolute bottom-0">
        <h1 className=" rounded-lg border-2 border-slate-500 cursor-pointer hover: bg-orange-200 transition p-4">
          SORT:{" "}
        </h1>
        <h1
          className=" rounded-lg border-2 border-slate-500 cursor-pointer hover: bg-slate-200 transition p-4"
          onClick={() => {
            sortMaxAttendance(dataTobeSorted);
          }}
        >
          Max Attendance
        </h1>
        <h1
          className=" rounded-lg border-2 border-slate-500 cursor-pointer hover: bg-slate-200 transition p-4"
          onClick={() => {
            sortDataLatest(dataTobeSorted);
          }}
        >
          Latest Atendance
        </h1>
      </div>
      <TabList>
        <Tab>Students</Tab>
        <Tab>Teachers</Tab>
      </TabList>
      <TabPanels height="full" overflow="hidden">
        <TabPanel>
          <Flex
            border="1px solid lightgray"
            boxShadow="lg"
            padding={4}
            borderRadius="full"
            bg="gray.100"
          >
            <Box>Student Id</Box>
            <Spacer />
            <Box>Name</Box>
            <Spacer />
            <Box>Action</Box>
            <Spacer />
            <Box>Student Details</Box>
          </Flex>
          <Flex
            height="80vh"
            overflow="auto"
            flexDirection="column"
            gap={2}
            margin={2}
          >
            {firstYearStudentesData.map((item: any, index: any) => (
              <PersonAttendanceBlock key={index} {...item} />
            ))}
            {/* <PersonAttendanceBlock {...firstYearStudentesData} /> */}
          </Flex>
        </TabPanel>
        <TabPanel>
          <p>Teachers Data</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
