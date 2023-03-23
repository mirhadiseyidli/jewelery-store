import "./styles.css";

function Logo() {
    return (
        <div>
            <a href={"./index.html"}><img src={require("./logos/logo2.png")} alt='Logo' className="logoStyle"/></a>
        </div>
    );
};

export default Logo;