import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  return (
    <div>
      <nav>
        <Header />
      </nav>
      <Outlet />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
