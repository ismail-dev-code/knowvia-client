import NavBar from "../pages/Shared/NavBar";
import { Outlet } from "react-router";
import Footer from "../pages/Shared/Footer";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <main className="w-11/12 min-h-[calc(100vh-457px)] mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
