import {EventEmitter} from "events";

import dispatcher from "./dispatcher";

class store extends EventEmitter {
    constructor() {
        super();
        this.dataForLayout = {
            matches: [
                "Арсенал Суонси",
                "МанС Эвертон",
                "Ливерпуль МанЮ",
                "Челси Лестер",
                "ВБА - Ттнхм",
                "Сток Сити - Сандерлен",
                "Борнмут Халл Сити",
                "Кристал Пэлас Вест Хэм",
                "Мидлсбро Уотфорд",
                "Саутгемптон Бернли"
            ],
            results: [
                "3 : 2",
                "1 : 1",
                "0 : 0",
                "3 : 0",
                "1 : 1",
                "2 : 0",
                "6 : 1",
                "0 : 1",
                "0 : 1",
                "3 : 1"
            ],
            vsBet: [
                "1", "*", "2", "1", "*", "2", "2", "1", "1", "1"
            ]
        };
    }

    sendMyBet(arrayOfBets) {
        //console.log(arrayOfBets);
        this.dataForLayout.myBet = [];
        this.dataForLayout.myBet = this.dataForLayout.myBet.concat(arrayOfBets);
        console.log(this.dataForLayout.myBet);
        this.emit("change");
    }

    getAll() {
        return this.dataForLayout;
    }

    handleActions(action) {
        switch (action.type) {
            case "ADD_MY_BET": {
                this.sendMyBet(action.myBet);
            }
        }
    }
}

const Store = new store;

dispatcher.register(Store.handleActions.bind(Store));

export default Store;