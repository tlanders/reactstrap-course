import React from 'react';
import './App.css';
import Axios from "axios";
import TopNav from "./components/TopNav";
import Home from "./components/Home";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicleData: null
    };
  }

  componentDidMount() {
    Axios.get('http://localhost:3001/vehicles')
        .then(res => {
          console.log(res.data);
          this.setState({
            vehicleData: res.data
          });
        })
        .catch(err => console.log(err));
  }

  render() {
      if(this.state.vehicleData) {
          return (
              <Router>
                  <div className="App">
                      <TopNav/>
                      <div class={"contentArea"}>
                        <Route exact path={'/'} component={Home}/>
                      </div>
                      <Footer/>
                  </div>
              </Router>
          );
      } else {
          return (<h4>Loading...</h4>);
      }
  }
}

export default App;
