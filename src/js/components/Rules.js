import React from "react";
import Header from "./Header.js";

export default class Rules extends React.Component {
    constructor() {
        super();
        this.state = {
            yourBet: ["*","*","*"],
            arrayOfMatchesResults: []
        };
    }
    getTable() {
        const {matches} = this.props.route;
        let tableForExample = [];
        for (let i = 0; i <= 3; i += 1) {
            if (i === 0) {
                tableForExample.push(
                    <tr>
                        <td>Матч</td>
                        <td>П1</td>
                        <td>Х</td>
                        <td>П2</td>
                    </tr>
                );
            } else {
                tableForExample.push(
                    <tr>
                        <td>{matches[i-1]}</td>
                        <td>
                            <label className="radio-inline">
                                <input className="radioInput" type="radio"  defaultValue="1" name={"match" + i } > </input>
                            </label>
                        </td>
                        <td>
                            <label className="radio-inline">
                                <input className="radioInput" type="radio"  defaultValue="*" name={"match" + i } defaultChecked > </input>
                            </label>
                        </td>
                        <td>
                            <label className="radio-inline">
                                <input className="radioInput" type="radio" defaultValue="2" name={"match" + i } > </input>
                            </label>
                        </td>
                    </tr>
                );
            }
        }
        return (
            <div className="table-responsive">
                <table className="table table-striped">
                    {tableForExample}
                </table>
            </div>
        );
    }

    getTableOfMatchesRes() {
        const {matches, results} = this.props.route;
        let tableOfResults = [];
        for (let j = 0; j <= 3; j += 1) {
            if (j === 0) {
                tableOfResults.push(
                    <tr>
                        <td>Матч</td>
                        <td className="text-center">Результат</td>
                        <td className="text-center">Правильная ставка</td>
                    </tr>
                );
            } else {
                let first = parseInt(results[j-1].charAt(0), 10) ,
                    second = parseInt(results[j-1].charAt(4), 10) ,
                    sendRes;
                if (first > second) sendRes = "1";
                else if (first < second) sendRes = "2";
                else sendRes = "*";
                this.state.arrayOfMatchesResults.push(sendRes);
                tableOfResults.push(
                    <tr>
                        <td>{ matches[j-1] }</td>
                        <td className="text-center">{ results[j-1] }</td>
                        <td className="text-center">{sendRes}</td>
                    </tr>
                );
            }
        }
        return (
            <div className="table-responsive">
                <table className="table table-striped">
                    {tableOfResults}
                </table>
            </div>
        );
    }

    createResultTable() {

        let resultTable = [],
            countForF = 0,
            countForS = 0,
            yourBet = this.state.yourBet,
            {vsBet} = this.props.route,
            rightBet = this.state.arrayOfMatchesResults,
            style1,
            style2,
            style3,
            style11,
            style22,
            style33;
        for (let y = 0; y <= 2; y += 1) {
            switch (y) {
                case 0:
                    resultTable.push(
                        <tr>
                            <td>Матчи</td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>...</td>
                            <td>Итог</td>
                        </tr>
                    );
                    break;
                case 1:

                    if (yourBet[0] === rightBet[0]) {
                        ++countForF;
                        style1 = {
                            backgroundColor: "honeydew"
                        };
                    } else {
                        style1 = {
                            backgroundColor: "white"
                        };
                    }

                    if (yourBet[1] === rightBet[1]) {
                        ++countForF;
                        style2 = {
                            backgroundColor: "honeydew"
                        };
                    } else {
                        style2 = {
                            backgroundColor: "white"
                        };
                    }

                    if (yourBet[2] === rightBet[2]) {
                        ++countForF;
                        style3 = {
                            backgroundColor: "honeydew"
                        };
                    } else {
                        style3 = {
                            backgroundColor: "white"
                        };
                    }

                    resultTable.push(
                        <tr>
                            <td>Вы:</td>
                            <td style={style1}> {yourBet[0]} </td>
                            <td style={style2}> {yourBet[1]} </td>
                            <td style={style3}> {yourBet[2]} </td>
                            <td>...</td>
                            <td>{countForF}</td>
                        </tr>
                    );
                    break;

                case 2:

                    if (vsBet[0] === rightBet[0]) {
                        ++countForS;
                        style11 = {
                            backgroundColor: "honeydew"
                        };
                    } else {
                        style11 = {
                            backgroundColor: "white"
                        };
                    }

                    if (vsBet[1] === rightBet[1]) {
                        ++countForS;
                        style22 = {
                            backgroundColor: "honeydew"
                        };
                    } else {
                        style22 = {
                            backgroundColor: "white"
                        };
                    }

                    if (vsBet[2] === rightBet[2]) {
                        ++countForS;
                        style33 = {
                            backgroundColor: "honeydew"
                        };
                    } else {
                        style33 = {
                            backgroundColor: "white"
                        };
                    }


                    resultTable.push(
                        <tr>
                            <td>Вы:</td>
                            <td style={style11}> {vsBet[0]} </td>
                            <td style={style22}> {vsBet[1]} </td>
                            <td style={style33}> {vsBet[2]} </td>
                            <td>...</td>
                            <td>{countForS}</td>
                        </tr>
                    );
                    break;
            }
        }

        return (
            <div className="table-responsive">
                <table className="table table-bordered">
                    {resultTable}
                </table>
            </div>
        );
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="panel panel-default" id="panelInRules">
                                <div className="panel-body">
                                    <div className="col-md-12 col-md-offset-0">
                                        <h5>
                                            <ol>
                                                <li>GamePlus - бесплатные онлайн турниры среди букмейкеров и людей, любящих
                                                    предугадывать исходы спортивных событий.
                                                </li>
                                                <br/>
                                                <li>Для участия в игре необходима регистрация, в которой каоторой
                                                    указывается e-mail, пароль, название игрока,
                                                    под которым вы будете участвовать втурнирах.
                                                </li>
                                                <br/>
                                                <li>Игра делится на турниры, в которых участвую 10 игроков. Количество
                                                    турнирова не ограничено.
                                                </li>
                                                <br/>
                                                <li>Итого турнир состоит из 9 туров (то есть каждый играет с каждым).</li>
                                                <br/>
                                                <li>В каждом туре проходят 5 "матчей". Для того, чтобы "матч" состоялся,
                                                    каждый участник должен сделать прогнозы
                                                    на 10 матчей в таком виде:<br/> <br/>
                                                    <div className="row">
                                                        <div className="col-md-12 col-md-offset-0">
                                                            {this.getTable()}
                                                        </div>
                                                    </div>
                                                    <br/>

                                                    После чего, прогнозы игроков сопостовляются (сравнимваются) в
                                                    приведенном ниже виде в зависимости от того,
                                                    кто и с кем "играет". После того, как рельные матчи состоялись (известен
                                                    результат), можно узнать победителя.<br/><br/>

                                                    <div className="row">
                                                        <div className="col-md-12 col-md-offset-0">
                                                            {this.getTableOfMatchesRes()}
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            {this.createResultTable()}
                                                        </div>
                                                    </div>

                                                    Принцип следующий:
                                                    <ul>
                                                        <li>Если каждый угадал, то оба "забивают" друг другу "гол"</li>
                                                        <li>Если оба не угадали, то никто никому не "забивает"</li>
                                                        <li>Если один из игроков угадал, а другой - нет, то угадавший
                                                            "забивает гол", а другой соответственно пропускает
                                                        </li>
                                                    </ul>
                                                </li>
                                                <br/>
                                                <li>За победу в туре даётся 3 очка, за ничью - одна, за поражение - ноль.
                                                </li>
                                                <br/>
                                            </ol>
                                        </h5>
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