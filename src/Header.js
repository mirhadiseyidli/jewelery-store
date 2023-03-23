import Logo from "./logo";
import Navbar from "./Navbar";
import "./styles.css";

function Header() {
    
    return (
        <div className='headerStyle'>
            <Logo />
            <Navbar />
        </div>
    );
};

export default Header;