"use client"
import { Box, Flex, Spacer, Tab, TabList, Tabs } from '@chakra-ui/react'
import React, { createContext, useState } from 'react'

interface SidebarProps{
  children:React.ReactNode
}

export const YearContext = createContext();

const Sidebar:React.FC<SidebarProps> = ({children}) => {
  const [year,setYear] = useState(1);
  return (
   <Box 
   overflow="hidden"
   w="100%"
   h="100vh"
   >
     <Flex
   bg="gray.100"
   height="100vh"
   borderRight="1px solid lightgray"
   p={4}
   w='200px'
   flexDirection="column"
   >
   <Box
   borderBottom="2px solid lightgray"
   >
     <Flex>
       <Box 
       fontSize={20}
       color="blue.500"
       fontWeight="700">Admin Dashboard</Box>
     </Flex>
   </Box>
   <Spacer/>
   
   <Box 
   p={3}
   display="flex"
   flexDir="column"
   gap="6"
   h="full"
   margin="2"
   borderRadius="8px"
   >
    <Tabs
    position="absolute"
    display="flex"
    flexDirection="row"
    >
      <TabList 
      gap={6}
      flexDirection="column"
      >
        <Tab
        onClick={()=>setYear(1)}
        >1st year</Tab>
        <Tab
        onClick={()=>setYear(2)}
        >2nd year</Tab>
        <Tab
        onClick={()=>setYear(3)}
        >3rd year</Tab>
        <Tab
        onClick={()=>setYear(4)}
        >4th year</Tab>
        <Tab></Tab>
      </TabList>
    </Tabs>
   </Box>
   <Spacer/>
   </Flex>
   <Box
   height="100vh"
   overflow="hidden"
   right="0"
   left="200px"
   position="absolute"
   top="0"
   >
     <YearContext.Provider value={{year,setYear}}>
       {children}
     </YearContext.Provider>
   </Box>
   </Box>
  )
}

export default Sidebar
