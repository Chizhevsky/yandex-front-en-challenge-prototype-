import React from "react";

export default class Result extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <div className="col-md-10 col-md-offset-1">
                                    <h2>Результаты матчей:</h2>
                                    <div className="row">
                                        <div className="table-responsive">
                                            <table className="table table-striped">
                                                <tr>
                                                    <td>Результат</td>
                                                    <td className="text-center">Правильная ставка</td>
                                                </tr>
                                                <tr>
                                                    <td>Арсенал 3-2 Суонси</td>
                                                    <td className="text-center">1</td>
                                                </tr>
                                                <tr>
                                                    <td>МанС 1-1 Эвертон</td>
                                                    <td className="text-center">*</td>
                                                </tr>
                                                <tr>
                                                    <td>Ливерпуль 1-1 МЮ</td>
                                                    <td className="text-center">*</td>
                                                </tr>
                                                <tr>
                                                    <td>...</td>
                                                    <td className="text-center">...</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                    <h2>Результат поединка</h2>
                                    <div className="row">
                                        <div className="table-responsive">
                                            <div className="col-md-12">
                                                <table className="table table-bordered">
                                                    <tr>
                                                        <td># Матчa</td>
                                                        <td className="text-center">1</td>
                                                        <td className="text-center">2</td>
                                                        <td className="text-center">3</td>
                                                        <td className="text-center">...</td>
                                                        <td className="text-center">Итог</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Вы</td>
                                                        <td className="text-center rightBet">1</td>
                                                        <td className="text-center rightBet">*</td>
                                                        <td className="text-center">1</td>
                                                        <td className="text-center">...</td>
                                                        <td className="text-center">2</td>

                                                    </tr>
                                                    <tr>
                                                        <td>Соперник</td>
                                                        <td className="text-center">2</td>
                                                        <td className="text-center rightBet">*</td>
                                                        <td className="text-center">2</td>
                                                        <td className="text-center">...</td>
                                                        <td className="text-center">1</td>
                                                    </tr>
                                                </table>
                                            </div>
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