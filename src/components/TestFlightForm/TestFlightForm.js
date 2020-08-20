import React from "react";
import {
    Alert,
    Card,
    InputGroup,
    InputGroupAddon,
    CardBody, CardTitle, CardSubtitle, CardText, FormGroup, Input, Button, Form, Col
} from 'reactstrap';
import Axios from "axios";

class TestFlightForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showSuccess: false,
            showDanger: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onReset = this.onReset.bind(this);
    }

    onReset(event) {
        console.log('resetting');
        event.preventDefault();
        this.setState({
            customerName: "",
            phone: "",
            email: "",
            budget: ""
        });
    }

    onSubmit(event) {
        console.log('submitting');
        event.preventDefault();
        Axios.post('http://localhost:3001/mailingList',
            {
                customerName: this.state.customerName,
                email: this.state.email,
                phone: this.state.phone,
                budget: this.state.budget
            })
            .then(res => {
                this.setState({showSuccess: true, showDanger: false});
            })
            .catch(err => {
                this.setState({showSuccess: false, showDanger: true});
            });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        // console.log(`handleInputChange: ${name} - ${value}`);
        this.setState({
            [name] : value
        });
    }

    render() {
        return (
            <div>
                <Col sm={12} md={{size: 8, offset: 2}}>
                    <Card>
                        <CardBody>
                            <CardTitle>Schedule a Test Flight</CardTitle>
                            <CardSubtitle>No pilot's license required!</CardSubtitle>
                            <CardText>Fill out the form fields below to schedule a test flight.</CardText>
                            <Form>
                                <FormGroup>
                                    <Input type={"text"} name={"customerName"} id={"customerName"}
                                           placeholder={"What is your name?"}
                                           value={this.state.customerName}
                                           onChange={this.handleInputChange}
                                    />
                                </FormGroup>
                                <br/>
                                <FormGroup>
                                    <Input type={"text"} name={"phone"} id={"phone"} placeholder={"What is your contact #?"}
                                           onChange={this.handleInputChange}
                                           value={this.state.phone}
                                    />
                                </FormGroup>
                                <br/>
                                <InputGroup>
                                    <InputGroupAddon addonType={"prepend"}>@</InputGroupAddon>
                                    <Input type={"text"} name={"email"} id={"email"} placeholder={"What is your email address?"}
                                           onChange={this.handleInputChange}
                                           value={this.state.email}
                                    />
                                </InputGroup>
                                <br/>
                                <InputGroup>
                                    <InputGroupAddon addonType={"prepend"}>$</InputGroupAddon>
                                    <Input type={"text"} name={"budget"} id={"budget"}
                                           onChange={this.handleInputChange}
                                           value={this.state.budget}
                                           placeholder={"Do you have a budget that you need to stay under?"}/>
                                </InputGroup>
                            </Form>
                            <br/>
                            <Button onClick={this.onSubmit}>Submit</Button>&nbsp;
                            <Button onClick={this.onReset}>Reset</Button>
                            <hr/>
                            <Alert color={"success"} isOpen={this.state.showSuccess}>Your data were submitted successfully. Your test flight awaits.</Alert>
                            <Alert color={"danger"} isOpen={this.state.showDanger}>Something went horribly wrong!</Alert>
                        </CardBody>
                    </Card>
                </Col>
            </div>
        )
    }
}

export default TestFlightForm;