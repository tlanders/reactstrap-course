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
                this.setState({
                    dealerships: res.data
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

            return searchBar;
        } else {
            return null;
        }
    }
}

export default DealerLocator;