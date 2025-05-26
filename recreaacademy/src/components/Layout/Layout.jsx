import Sidebar from "../Sidebar/sidebar";
import { 
 Box
} from '@chakra-ui/react';

const Layout = ({ children }) => {
  return (
    <Box display='flex' flexDirection='row'>
      <Sidebar />
      <Box>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
