"use client";

import {
  Box,
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

interface PersonAttendanceBlockProps {
  name: string;
  major: string;
  profilePicUrl: string;
  action: string;
  studentDetails: Object;
  standing: string;
  starting_year: number;
}

const PersonAttendanceBlock: React.FC<any> = ({
  name,
  major,
  standing,
  starting_year,
  year,
  last_attendance_time,
  "total attendance": totalAttendance,
}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Flex
      bg="gray.50"
      alignItems="center"
      padding={2}
      borderWidth="2px"
      borderRadius="lg"
    >
      <Box>{/* {id} */}</Box>
      <Spacer />
      <Box>
        <Flex alignItems="center" gap="2">
          {/* <Image
      objectFit='cover'  
      borderRadius='full'
      boxSize='60px'
      src={profilePicUrl}
      alt='Dan Abramov'
      /> */}
          <Box>
            <Text as="b">{name}</Text>
            <Text fontSize="sm" color="gray">
              {/* {description}
           ( {studentDetails.branch} ) */}
              {major}
            </Text>
          </Box>
        </Flex>
      </Box>
      <Spacer />

      <Box fontSize="sm" color={standing === "G" ? "green.400" : "red"}>
        {standing === "G" ? "Present" : "Absent"}
      </Box>
      <Spacer />

      <Box>
        <Button
          className="text-black"
          boxShadow="base"
          bg="gray.100"
          border="1px solid lightgray"
          onClick={onOpen}
        >
          Student Details
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader className="text-slate-400">
              Student Details
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <h1 className="text-white">Starting year: {starting_year}</h1>
              <h1 className="text-white">year :{year}</h1>
              <h1 className="text-white">Branch :{major}</h1>
              <h1 className="text-white">
                last attendance :{last_attendance_time}
              </h1>
              <h1 className="text-white">
                total_attendance :{totalAttendance}
              </h1>
            </ModalBody>

            <ModalFooter>
              <Button
                className="text-red-400"
                variant="ghost"
                mr={3}
                onClick={onClose}
              >
                Close
              </Button>
              <Button className="text-blue-400" variant="ghost">
                Secondary Action
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Flex>
  );
};

export default PersonAttendanceBlock;
