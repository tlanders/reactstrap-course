import React from "react";
import Numeral from 'numeral';
import "./BuildAndPrice.css";
import {
    Collapse,
    Media,
    Button,
    Card,
    CardBody,
    Row,
    Col,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const ModelPickerCollapse = (props) => {
    const vehicle = props.selectedVehicle;
    return (
        <div className={"clickableMedia"}>
            <Media>
                <Media left href="#">
                    <Media object data-src={vehicle.thumbnail} alt={vehicle.model} />
                </Media>
                <Media body>
                    <Media heading>
                        {vehicle.model}
                    </Media>
                    <div>
                        {vehicle.tagline}
                        <br/><br/>
                        <span>Starting at: {Numeral(vehicle.msrp).format('$0,0.00')}</span><br/>
                        <span><i className={"fas fas-gas-pump"}/> {vehicle.options.engines[0].nmpg} NMPG</span>
                    </div>

                </Media>
            </Media>
        </div>
    );
}

export default ModelPickerCollapse;