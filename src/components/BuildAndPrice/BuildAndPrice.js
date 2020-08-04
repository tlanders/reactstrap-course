import React from "react";
import "./BuildAndPrice.css";
import BuildAndPriceImageRotator from "./BuildAndPriceImageRotator";
import ColorPicker from "./ColorPicker";
import EngineSelector from "./EngineSelector";
import ModelPicker from "./ModelPicker";
import ModelPickerCollapse from "./ModelPickerCollapse";
import classnames from 'classnames';
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Row,
    Col,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Progress
} from 'reactstrap';
import Numeral from 'numeral';

class BuildAndPrice extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.selectVehicle = this.selectVehicle.bind(this);
        this.selectColor = this.selectColor.bind(this);
        this.selectEngine = this.selectEngine.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.determineProgress = this.determineProgress.bind(this);
        this.computePrice = this.computePrice.bind(this);
        this.state = {
            activeTab: '1',     // currently selected tab, 1-based
            selectedVehicle: 'jumper',      // key for selected vehicle
            userHasSelectedVehicle: false,
            userHasSelectedColor: false,
            selectedColor: 0,   // index to color
            selectedColorName: "A Color",
            selectedEngine: 0,  // index to engine
            selectedEngineName: "An Engine",
            userHasSelectedEngine: false,
            modal: false,
            done: false,
            engineCost: 0,
            msrp: 30000
        };
    }

    toggle(tab) {}
    toggleModal() {}

    computePrice() {
        return Number(this.state.msrp) + Number(this.state.engineCost);
    }

    determineProgress() {}
    selectVehicle(event) {}
    selectEngine(event) {}
    selectColor(event) {}

    render() {
        return (
            <div>
                <h3>Build and Price</h3>

                <BuildAndPriceImageRotator
                    vehicleData={this.props.vehicleData}
                    selectedVehicle={this.state.selectedVehicle}
                    colorIndex={this.state.selectedColor}
                    colorName={this.state.selectedColorName}

                    cost={this.computePrice()}
                    engineIndex={this.state.selectedEngine}
                />

                <h4>Color: {this.state.selectedColorName}</h4>
                <h5>Engine: {this.state.selectedEngineName}</h5>
                <h5>Price as Configured: {Numeral(this.computePrice()).format('$0,0.00')}</h5>
                {/*<ColorPicker/>*/}
                {/*<EngineSelector/>*/}
                {/*<ModelPicker/>*/}
                {/*<ModelPickerCollapse/>*/}
            </div>
        );
    }
}

export default BuildAndPrice;