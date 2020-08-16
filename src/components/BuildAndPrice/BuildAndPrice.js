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

    selectVehicle(event) {
        const selected = event.target.dataset.model;
        const msrp = event.target.dataset.msrp;
        this.setState({
            msrp,
            selectedVehicle: selected,
            activeTab: '2'
        });
    }

    selectEngine(event) {
        const selected = event.target.dataset.engine;
        const cost = event.target.dataset.engineCost;
        const name = event.target.dataset.engineName;
        this.setState({
            selectedEngine: Number(selected),
            selectedEngineName: name,
            engineCost: cost
        });
    }

    selectColor(event) {
        const selected = event.target.dataset.color;
        const selectedColorName = event.target.dataset.colorName;
        this.setState({
            activeTab: '3',
            selectedColor: Number(selected),
            selectedColorName
        });
    }

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
                                <ModelPicker
                                    vehicleData={this.props.vehicleData}
                                    selectedVehicle={this.state.selectedVehicle}
                                    selectVehicle={this.selectVehicle}
                                />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <ColorPicker
                                    vehicleData={this.props.vehicleData}
                                    selectedVehicle={this.state.selectedVehicle}
                                    selectColor={this.selectColor}
                                    selectedColor={this.state.selectedColor}
                                />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId={"3"}>
                        <Row>
                            <Col sm="12">
                                <EngineSelector
                                    vehicleData={this.props.vehicleData}
                                    selectedVehicle={this.state.selectedVehicle}
                                    onEngineSelect={this.selectEngine}
                                    selectedEngine={this.state.selectedEngine}
                                />
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default BuildAndPrice;