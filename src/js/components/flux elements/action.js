import dispatcher from "./dispatcher";

export function sendMyBet(arrayOfBets) {
    dispatcher.dispatch({
        type: "ADD_MY_BET",
        myBet: arrayOfBets,
    });
}