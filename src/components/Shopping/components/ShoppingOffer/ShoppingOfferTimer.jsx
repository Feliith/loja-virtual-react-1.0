import React, { Component } from "react"

import ShoppingOfferTimerDigit from "./ShoppingOfferTimerDigit"

const digitsTo9 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const digitsTo5 = [0, 1, 2, 3, 4, 5]
const digitsTo0 = [0]

class ShoppingOfferTimer extends Component {
    render() {
        return (
            <div className="shopping-offer-timer">
                <div className="timer-hours">
                    <ShoppingOfferTimerDigit digitsTo={digitsTo0} time="3600000" />
                    <ShoppingOfferTimerDigit digitsTo={digitsTo9} time="3600000" />
                </div>
                <div className="timer-minutes">
                    <ShoppingOfferTimerDigit digitsTo={digitsTo5} time="600000" />
                    <ShoppingOfferTimerDigit digitsTo={digitsTo9} time="60000" />
                </div>
                <div className="timer-seconds">
                    <ShoppingOfferTimerDigit digitsTo={digitsTo5} time="10030" />
                    <ShoppingOfferTimerDigit digitsTo={digitsTo9} time="1000" />
                </div>
            </div>
        )
    }
}

export default ShoppingOfferTimer