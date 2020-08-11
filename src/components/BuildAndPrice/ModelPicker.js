import React from "react";
import ModelPickerCollapse from "./ModelPickerCollapse";
import {
    Row,
    Col
} from 'reactstrap';

const ModelPicker = (props) => {
    return (
        <div>
            <Row>
                <Col sm={"12"}>
                    {props.vehicleData.map(vehicle => {
                        return (
                            <ModelPickerCollapse
                                key={"model-picker-" + vehicle.detailKey}
                                selectedVehicle={vehicle}
                                selectVehicle={props.selectVehicle}
                            />
                        )
                    })}
                </Col>
            </Row>
        </div>
    );
}

export default ModelPicker;