import Ad from "./Ad";
import Items from "./Items";
import "./styles.css";
import jew1 from "./logos/jew1.png";
import jew2 from "./logos/jew2.png";
import jew3 from "./logos/jew3.png";

function Body() {
    return (
        <div className="bodyStyle">
            <Ad />
            <Items picLink={jew1} jewName="Diamond Ring" jewDescription="White Gold Ring with real Diamonds, circular band of gold, silver, or some other precious or decorative material that is worn on the finger."/>
            <Items picLink={jew2} jewName="Silver chain" jewDescription="Silver Chain is a serial assembly of connected pieces, called links, typically made of metal, with an overall character similar to that."/>
            <Items picLink={jew3} jewName="Diamond earrings" jewDescription="Diamond Earrings, a personal ornament worn pendent from the ear, usually suspended by means of a ring or hook passing through a pierced hole in the lobe of the ear."/>
        </div>
    );
};

export default Body;