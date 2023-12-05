import Die from "./Die"
import "./Dice.css"
export default function Dice({ dice }) {
    return (
        <section className="Dice">
            {dice.map((val, index) => {
                return <Die val={val} key={index} />
            })}
        </section>
    )
}