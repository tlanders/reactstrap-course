import React from 'react';
import "./EngineSelector.css";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class EngineSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        const selectedVehicleData = this.props.vehicleData.filter(veh => veh.detailKey === this.props.selectedVehicle)[0];
        return (
            <div>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                        Select an Engine
                    </DropdownToggle>
                    <DropdownMenu>
                        {selectedVehicleData.options.engines.map((engine, index) => {
                            return (
                                <DropdownItem
                                        data-engine={index}
                                        data-engine-cost={engine.cost}
                                        data-engine-name={engine.name}
                                        onClick={this.props.onEngineSelect}
                                        key={engine.name}>
                                    {engine.name}
                                </DropdownItem>
                            )
                        })}
                    </DropdownMenu>
                </Dropdown>
            </div>
        )
    }
}

export default EngineSelector;