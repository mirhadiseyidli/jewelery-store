import "./styles.css";

function Ad() {
    return (
        <div className="adcontainerStyle">
            <img src={require("./logos/ad.png")} alt='Ad' className="adStyle"/>
        </div>
    );
};

export default Ad;