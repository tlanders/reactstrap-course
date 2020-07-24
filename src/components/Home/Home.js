import React from "react";
import "./Home.css";
import SiteCarousel from "../SiteCarousel";
import VehicleBrowser from "../VehicleBrowser";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>Home component goes here.</p>
                <SiteCarousel/>
                <VehicleBrowser/>
            </div>
        );
    }
}

export default Home;