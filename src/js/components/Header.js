import React from "react";
import { Link, IndexLink } from "react-router";

export default class Header extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default" id="headersTopMargin">
                            <div className="panel-body">
                                <h1 className="text-center">GamePlus <small>game for football fans</small></h1>
                            </div>
                            <div className="panel-footer" id="footerInHeader">
                                <ul className="nav nav-pills nav-justified" id="textColorforUl">
                                    <li role="presentation"  id="liBorder"><IndexLink to="/">Главная</IndexLink></li>
                                    <li role="presentation"><Link to="/play">Играть</Link></li>
                                    <li role="presentation"><Link to="/rules">Правила</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}