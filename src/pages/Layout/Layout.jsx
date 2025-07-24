import { Outlet } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function Layout() {
    return <>
        <Navbar />
        <Outlet />
        <Footer></Footer>
    </>


}
