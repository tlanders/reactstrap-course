import React from "react";
import "./Footer.css";

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer>
                <a href="/schedule">Schedule a Test Flight!</a>
            </footer>
        );
    }
}

export default Footer;