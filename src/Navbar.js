import "./styles.css";

function Navbar() {
    return (
        <div className="navbarStyle">
            <ul className="ulStyle">
                <li className="liStyle"><a href={'./index.html'} className="aStyle"><h3>Home</h3></a></li>
                <li className="liStyle"><a href={'./products.html'} className="aStyle"><h3>Products</h3></a></li>
                <li className="liStyle"><a href={'./contact.html'} className="aStyle"><h3>Contact</h3></a></li>
                <li className="liStyle"><a href={'./about.html'} className="aStyle"><h3>About</h3></a></li>
            </ul>
        </div>
    );
};

export default Navbar;