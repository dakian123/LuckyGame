import { useState } from "react";
import { getRolls } from "./utils"
import Dice from "./Dice";
import Button from "./Button";
export default function LuckyGame({ numDice = 2, winCheck }) {
    const [dice, setDice] = useState(getRolls(numDice))
    function roll() {
        setDice(getRolls(numDice))
    }
    const isWinner = winCheck(dice)
    return (
        <div>
            {isWinner && <h2>You Win!!!</h2>}
            <Dice dice={dice} />
            <Button clickFunc={roll} label={"Re-Roll"} />
        </div>
    )

}