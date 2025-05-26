import UserAvatar from "./UserAvatar";
import Sidebar from "../Sidebar/sidebar";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <main className="main-content">
        <UserAvatar /> 
        <div className="content-container">
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;