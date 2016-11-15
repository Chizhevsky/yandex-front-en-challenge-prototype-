import React from "react";
import Header from "./Header.js";

export default class Main extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="row" id="mainPiece">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="panel panel-default" id="mainDiv">
                                <div className="panel-heading" id="panelHeadingInMain">
                                    <div className="col-md-10 col-md-offset-1">
                                        <h2 className="text-left">Добро пожаловать в Game+</h2>
                                        <h4>Если вы впервые у нас - советуем посетить вкладку Правила </h4>
                                    </div>
                                </div>
                                <div className="panel-body">
                                    <div className="col-md-10 col-md-offset-1">
                                        <h3>Просмотр кода на GitHub</h3>
                                        <a className="btn btn-default" href="https://github.com/Chizhevsky" role="button">GitHub</a>
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