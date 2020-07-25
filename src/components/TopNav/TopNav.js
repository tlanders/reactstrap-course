import React from 'react';
import './TopNav.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import {Link} from "react-router-dom";

class TopNav extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const vehicleSelections = this.props.vehicleData.map(veh => {
            return (
                <DropdownItem key={veh.detailKey}>
                    <Link to={{pathname: "/detail/" + veh.detailKey}}>{veh.model}</Link>
                </DropdownItem>
            );
        }, this);
        return (
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">flying car dealership</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="/"><i className="fas fa-home"></i> Home</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                <i className="fas fa-space-shuttle"></i> Flying Cars
                            </DropdownToggle>
                            <DropdownMenu right>
                                {vehicleSelections}
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink href={"/find-a-dealer"}><i className="fas fa-map-marker-alt"></i> Find a Dealer</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href={"/build-and-price"}><i className="fas fa-cog"></i> Build and Price</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default TopNav;