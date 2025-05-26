import { Box, Flex } from '@chakra-ui/react';
import UserAvatar from "./UserAvatar";
import Sidebar from "../Sidebar/sidebar";

const Layout = ({ children }) => {
  return (
    <Flex minH="100vh" bg="gray.50">
      <Sidebar />
      <Box as="main" flex="1" p={6}>
        <UserAvatar />
        <Box mt={6}>
          {children}
        </Box>
      </Box>
    </Flex>
  );
};

export default Layout;
