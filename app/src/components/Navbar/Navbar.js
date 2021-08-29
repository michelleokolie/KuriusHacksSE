import NavItem from "./NavItem"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Landing from "../Landing/Landing";
import About from "../About/About";

const Navbar = () => {
    return (

        <div className="navbar">
            <NavItem item="wR" className="navbarLogo" />
            <div className="links">
                <NavItem item="Home" className="navItem" link="#" />

                <NavItem item="Research" className="navItem" link="#" onClick={() => { alert("Enter reviewer password below") }} />

                <NavItem item="About" className="navItem" link="#" />

            </div>
        </div>
    )
}

export default Navbar