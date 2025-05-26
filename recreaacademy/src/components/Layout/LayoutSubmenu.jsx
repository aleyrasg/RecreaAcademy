import Sidebar from "../Sidebar/sidebar";
import "./LayoutSubmenu.css";

const LayoutSubmenu = ({ children }) => {
  return (
    <main className="main-content">
      <Sidebar />
      <div className="content-container">
        {children}
      </div>
    </main>
  );
};

export default LayoutSubmenu;