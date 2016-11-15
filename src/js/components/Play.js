import React from "react";
import Header from "./Header.js";

import * as Action from "./flux elements/action";

export default class Play extends React.Component {
    constructor(props) {
        super(props);
        this.matches = props.route.matches;
        this.results = props.route.results;
        this.vsBet = props.route.vsBet;
        this.state = {
            yourBet : ["*",  "*", "*", "*", "*", "*", "*", "*", "*", "*"],
            rightBet: []
        };
    }

    changeBet(value, i) {
        this.state.yourBet[i] = value;
        this.setState({});
    }

    getTableForBet() {
        let tableForBet = [];
        for (let i = 0; i <= 10; i += 1) {
            if (i === 0) {
                tableForBet.push(
                    <tr>
                        <td>Матчи</td>
                        <td>П1</td>
                        <td>Х</td>
                        <td>П2</td>
                    </tr>
                );
            } else {
                tableForBet.push(
                    <tr>
                        <td>{this.matches[i-1]}</td>
                        <td>
                            <label className="radio-inline">
                                <input className="radioInput" onClick={this.changeBet.bind(this, "1", i-1)} type="radio"  defaultValue="1" name={"match" + i } > </input>
                            </label>
                        </td>
                        <td>
                            <label className="radio-inline">
                                <input className="radioInput" onClick={this.changeBet.bind(this, "*", i-1)} type="radio"  defaultValue="*" name={"match" + i } defaultChecked > </input>
                            </label>
                        </td>
                        <td>
                            <label className="radio-inline">
                                <input className="radioInput" onClick={this.changeBet.bind(this, "2", i-1)} type="radio" defaultValue="2" name={"match" + i } > </input>
                            </label>
                        </td>
                    </tr>
                );
            }
        }
        return (
            <div className="table-responsive">
                <table className="table table-striped">
                    {tableForBet}
                </table>
            </div>
        );
    }

    getTableOfMatchesResult() {
        let tableOfMatchesResults = [];
        for (let j = 0; j <= 10; j += 1) {
            if (j === 0) {
                tableOfMatchesResults.push(
                    <tr>
                        <td>Матч</td>
                        <td className="text-center">Результат</td>
                        <td className="text-center">Правильная ставка</td>
                    </tr>
                );
            } else {
                const f = parseInt(this.results[j-1].charAt(0), 10),
                    s = parseInt(this.results[j-1].charAt(4), 10);
                let matchRes;
                if (f > s) matchRes = "1";
                else if (f < s) matchRes = "2";
                else matchRes = "*";
                if (this.state.rightBet.length < 10) {
                    this.state.rightBet.push(matchRes);
                }
                tableOfMatchesResults.push(
                    <tr>
                        <td>{this.matches[j-1]}</td>
                        <td className="text-center">{this.results[j-1]}</td>
                        <td className="text-center">{matchRes}</td>
                    </tr>
                );
            }
        }
        return (
            <div className="table-responsive">
                <table className="table table-striped">
                    {tableOfMatchesResults}
                </table>
            </div>
        );
    }

    getTableOfMainCompetition() {
        let resultTable = [],
            forFirst = [],
            forSecond = [],
            countF = 0,
            countS = 0,
            styleF,
            styleS;
        //console.log(this.state.rightBet);
        for (let z = 0; z < 3; z += 1) {
            switch (z) {
                case 0:
                    resultTable.push(
                        <tr>
                            <td>Матчи</td>
                            <td className="text-center">1</td>
                            <td className="text-center">2</td>
                            <td className="text-center">3</td>
                            <td className="text-center">4</td>
                            <td className="text-center">5</td>
                            <td className="text-center">6</td>
                            <td className="text-center">7</td>
                            <td className="text-center">8</td>
                            <td className="text-center">9</td>
                            <td className="text-center">10</td>
                            <td className="text-center">Итог</td>
                        </tr>
                    );
                    break;
                case 1:
                    for (let x = 0; x < 12; x += 1) {
                        if (x === 0) {
                            forFirst.push(<td>Вы:</td>);
                        }
                        else if (x === 11) {
                            forFirst.push(<td className="text-center">{countF}</td>);
                        }
                        else {
                            if (this.state.yourBet[x - 1] === this.state.rightBet[x - 1]) {
                                styleF = {backgroundColor: "honeydew"};
                                ++countF;
                            } else {
                                styleF = {backgroundColor: "white"};
                            }
                            forFirst.push(<td style={ styleF }
                                              className="text-center">{this.state.yourBet[x - 1]}</td>);
                        }
                    }
                    break;
                case 2:
                    for (let y = 0; y < 12; y += 1) {
                        if (y === 0) {
                            forSecond.push(<td>Соперник:</td>);
                        }
                        else if (y === 11) {
                            forSecond.push(<td className="text-center">{countS}</td>);
                        }
                        else {
                            if (this.vsBet[y - 1] === this.state.rightBet[y - 1]) {
                                styleS = {backgroundColor: "honeydew"};
                                ++countS;
                            } else {
                                styleS = {backgroundColor: "white"};
                            }
                            forSecond.push(<td style={ styleS }
                                              className="text-center">{this.vsBet[y - 1]}</td>);
                        }
                    }
                    break;
            }
        }
        return (
            <div className="table-responsive">
                <table className="table table-bordered">
                    {resultTable}
                    <tr>
                        {forFirst}
                    </tr>
                    <tr>
                        {forSecond}
                    </tr>
                </table>
            </div>
        );
    }

    betDone() {
        let betTable = document.getElementById("createBet"),
            resultTable = document.getElementById("afterBet");
        betTable.style.display = "none";
        resultTable.style.display = "block";
        Action.sendMyBet(this.state.yourBet);
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <div id="createBet" className="col-md-10 col-md-offset-1">
                                        <h3 className="text-center">Сделаейте ставку на 8 тур</h3><br/>
                                        <div className="row">
                                            {this.getTableForBet()}
                                        </div>
                                        <div className="row">
                                            <div className="col-md-2 col-md-offset-9">
                                                <button type="submit" onClick={this.betDone.bind(this)} className="btn btn-default btn">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="afterBet" className="col-md-10 col-md-offset-1">
                                        <h3 className="text-center">Результаты матчей</h3><br/>
                                        <div className="row">
                                            {this.getTableOfMatchesResult()}
                                        </div>
                                        <h3 className="text-center">Результат вашего противостояния</h3>
                                        <div className="row">
                                            {this.getTableOfMainCompetition()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}