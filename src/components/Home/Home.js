import React from "react";
import "./Home.css";
import SiteCarousel from "../SiteCarousel";
import VehicleBrowser from "../VehicleBrowser";

const Home = (props) => {
    if(props.vehicleData) {
        return (
            <div>
                <SiteCarousel vehicleData={props.vehicleData}/>
                <VehicleBrowser vehicleData={props.vehicleData}/>
            </div>
        );
    } else {
        return null;
    }
}

export default Home;