import "./styles.css";

function Footer() {
    return (
        <div className="footerStyle">
            <div>
                <img src={require("./logos/logo1.png")} alt="logofoot" className="footerlogoStyle"/>
            </div>
            <div>
                <p>Copyright Mangata & Gallo</p>
            </div>
        </div>
    );
};

export default Footer;