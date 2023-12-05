import './App.css'
import LuckyGame from './LuckyGame'
import { sum } from './utils'
function App() {

  function lessThan4(dice) {
    return sum(dice) < 4
  }
  function isSameValue(dice) {
    return dice.every((v) => v === dice[0])
  }
  return (
    <main>
      <h1>Lucky Game</h1>
      <LuckyGame winCheck={lessThan4} />
      <LuckyGame winCheck={isSameValue} />
    </main>
  )
}

export default App
