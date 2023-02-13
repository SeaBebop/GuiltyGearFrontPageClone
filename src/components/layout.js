import { Link, Outlet } from "react-router-dom";
import Footer from "./footer"; 
import NavBar from "./navbar";

const Layout = () =>{
    return (
        
        <div className="main">
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
export default Layout;