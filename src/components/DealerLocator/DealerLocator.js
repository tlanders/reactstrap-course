import React from "react";
import Axios from "axios";
import {
    Row,
    Col,
    Form,
    FormGroup,
    Input,
    ListGroup,
    ListGroupItem,
    Badge,
    Table,
    Button,
    InputGroup,
    InputGroupAddon
} from 'reactstrap';

class DealerLocator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
            dealerships: null
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onClearClicked = this.onClearClicked.bind(this);
    }

    componentDidMount() {
        Axios.get('http://localhost:3001/dealerships')
            .then(res => {
                let stateCounter = res.data.reduce((accum, dealer) => {
                    accum[dealer.state] = (accum[dealer.state] || 0) + 1;
                    // console.log(`${dealer.state}: ${accum[dealer.state]}`);
                    return accum;
                }, {});
                console.log(stateCounter);
                this.setState({
                    dealerships: res.data,
                    stateCounter: stateCounter
                });
            })
            .catch(err => console.log(err));
    }

    onClearClicked(event) {
        event.preventDefault();
        this.setState({
            searchTerm: ""
        });
    }

    handleInputChange(event) {
        this.setState({
            searchTerm: event.target.value
        });
    }

    render() {
        if(this.state.dealerships) {
            const filteredDealerships = this.state.dealerships
                .filter(dealer => dealer.state.includes(this.state.searchTerm));
            let searchBar = (
                <div>
                    <h1>Over {this.state.dealerships.length} Authorized Dealers Nationwide</h1>
                    <Row>
                        <Col sm={12} md={{size: 6, offset: 3}}>
                            <Form>
                                <FormGroup>
                                    <InputGroup>
                                        <Input type={"text"}
                                               onChange={this.handleInputChange}
                                               val={this.state.searchTerm}
                                               name={"user_address"}
                                               placeholder={"We're probably nearby. What state are you in?"}/>
                                           <InputGroupAddon addonType={"append"}>
                                               <Button onClick={this.onClearClicked}>X</Button>
                                           </InputGroupAddon>
                                    </InputGroup>
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                </div>);

            if(this.state.searchTerm.length < 4) {
                let stateCounterHtml = null
                if(this.state.stateCounter) {
                    stateCounterHtml = Object.entries(this.state.stateCounter)
                        .sort(([astate],[bstate]) => astate.localeCompare(bstate))
                        .map(([stateName, count]) => {
                        // console.log(`${stateName} - ${count}`);
                        return (
                            <ListGroupItem
                                key={stateName}
                                tag={"a"}
                                href={"#"}
                                className={"justify-content-between"}
                            >
                                {stateName} <Badge pill>{count}</Badge>
                            </ListGroupItem>
                        );
                    })
                }

                return (
                    <div>
                        {searchBar}
                        <Row>
                            <Col sm={12} md={{size: 10, offset: 1}}>
                                <ListGroup>
                                    {stateCounterHtml}
                                </ListGroup>
                            </Col>
                        </Row>
                    </div>
                );
            } else {
                return (
                    <div>
                        {searchBar}
                        <Row>
                            <Col sm={12} md={{size: 10, offset: 1}}>
                                <Table hover>
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Dealership</th>
                                        <th>Address</th>
                                        <th>City</th>
                                        <th>State</th>
                                        <th>Zip</th>
                                        <th>Phone</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {filteredDealerships.map((d, index) => {
                                        return (
                                            <tr key={d.phone}>
                                                <td>{String(index)}</td>
                                                <td>{d.dealershipName}</td>
                                                <td>{d.address}</td>
                                                <td>{d.city}</td>
                                                <td>{d.state}</td>
                                                <td>{d.zip}</td>
                                                <td>{d.phone}</td>
                                            </tr>
                                        );
                                    })}
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>
                    </div>
                );
            }
        } else {
            return null;
        }
    }
}

export default DealerLocator;