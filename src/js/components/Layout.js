import React from "react";
import { Router, Route} from "react-router";

import Rules from "./Rules.js";
import Play from "./Play";
import Main from "./Main";

import Store from "./flux elements/store";
//import * as Action from "./flux elements/action";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = Store.getAll();
    }
    componentWillMount() {
        Store.on("change", () => {
            this.setState({
                myBet: Store.getAll().myBet
            });
        });
    }
    componentWillUnmount() {
        Store.removeListener("change", () => {
            this.setState({
                myBet: Store.getAll().myBet
            });
            console.log(this.state.myBet);
        });
    }
    render() {
        return (
            <Router>
                <Route path="/" component={Main} />
                <Route path="/play" component={Play} matches={this.state.matches} results={this.state.results} vsBet={this.state.vsBet} />
                <Route path="/rules" component={Rules} matches={this.state.matches} results={this.state.results} vsBet={this.state.vsBet}  />
            </Router>
        );
    }
}