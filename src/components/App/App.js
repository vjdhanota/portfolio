import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import styled from "styled-components";
import Contact from '../Contact/Contact';
import About from '../About/About';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import Worldly from '../Worldly/Worldly';
import Giv from '../Giv/Giv';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
const Container = styled.div`
  width: 92%;
  max-width: 950px;
  margin: 0 auto;
`;

const ContentContainer = styled.div`
  min-height: 90vh;
`


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNavLink: "work"
    };
  }

  render() {
    return (
      <Router>
        <Container>
          <ContentContainer>
            <Header active={this.state.activeNavLink} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/work" component={Home} />
              <Route exact={true} path="/about" component={About} />
              <Route exact={true} path="/contact" component={Contact} />
              <Route exact={true} path="/worldly" component={Worldly} />
              <Route exact={true} path="/giv" component={Giv} />
              <Route component={NotFound}/>
            </Switch>
          </ContentContainer>
          <Footer/>
        </Container>
      </Router>
    );
  }
}
export default App;
