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
            selectedVehicle: 'altima2018',      // key for selected vehicle
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

    toggle(tab) {
        if(this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

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

                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            Model
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            Color
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '3' })}
                            onClick={() => { this.toggle('3'); }}
                        >
                            Engine
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <h4>Model Picker goes here</h4>
                                <ModelPickerCollapse {...this.props} selectedVehicle={this.state.selectedVehicle}/>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <h4>Color Picker goes here</h4>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId={"3"}>
                        <Row>
                            <Col sm="12">
                                <h4>Engine Picker goes here</h4>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default BuildAndPrice;