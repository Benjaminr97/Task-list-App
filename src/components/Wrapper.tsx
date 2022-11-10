import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { VIEWPORT_WIDTH } from "../constants";

interface WrapperProps {}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <Box mt={8} w="100%" maxW={VIEWPORT_WIDTH} mx={"auto"}>
      <Heading cursor="" mt={8} mb={8} as="h4" size="4xl">
       Task List 
      </Heading>
      {children}
    </Box>
  );
};
