import "./Button.css"
export default function Button({ clickFunc, label }) {
    return (
        <button className="Button" onClick={clickFunc}>{label}</button>
    )
}