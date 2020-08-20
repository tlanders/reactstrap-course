import React from "react";
import Numeral from 'numeral';
import "./BuildAndPrice.css";
import {
    Collapse,
    Media,
    Card,
    CardBody,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

class ModelPickerCollapse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            collapse: !this.state.collapse
        });
    }

    render() {
        const vehicle = this.props.selectedVehicle;
        // console.log(vehicle);
        return (
            <div className={"clickableMedia"}>
                <Media>
                    <Media left href="#">
                        <Media object src={vehicle.thumbnail} className={"vehicleImage"} alt={vehicle.model}/>
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
                <Nav>
                    <NavItem>
                        <NavLink onClick={this.toggle}>{this.state.collapse ? 'See Less' : 'See More'}</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink data-model={vehicle.detailKey} data-msrp={vehicle.msrp} onClick={this.props.selectVehicle}>Select</NavLink>
                    </NavItem>
                </Nav>
                <Collapse isOpen={this.state.collapse}>
                    <Card>
                        <CardBody>
                            {vehicle.description}
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        );
    }
}

export default ModelPickerCollapse;