import React from "react";
import "./VehicleBrowser.css";
import {
    Container,
    Row,
    Col,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    NavLink
} from 'reactstrap';
import Numeral from 'numeral';

class VehicleBrowser extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const vehicleSelections = this.props.vehicleData.map(veh => {
            return (
                <Col md={Math.ceil(12 / this.props.vehicleData.length)} key={veh.detailKey + "vb"}>
                    <Card>
                        <CardImg top width={"100%"} src={veh.thumbnail} alt={`${veh.modelYear} ${veh.model}`}/>
                        <CardBody>
                            <CardTitle>{veh.modelYear} {veh.model}</CardTitle>
                            <CardSubtitle>{veh.tagline}</CardSubtitle>
                            <CardText>Starts at {Numeral(veh.msrp).format('$0,0')}</CardText>
                            <NavLink href={"/detail/" + veh.detailKey}>Details</NavLink>
                            <NavLink href={"/build-and-price"}>Build and Price</NavLink>
                            <NavLink href={"/find-a-delear"}>Dealers Near You</NavLink>
                        </CardBody>
                    </Card>
                </Col>
            )
        });
        return (
            <div className={"vehicleBrowser"}>
                <Container>
                    <Row>
                        {vehicleSelections}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default VehicleBrowser;