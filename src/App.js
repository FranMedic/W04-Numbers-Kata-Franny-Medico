import "./App.css";
import Number from "./component/Number/Number.js";
import Button from "./component/button/Button.js";
import { useState } from "react";

function App() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [buttonPlus, setButtonPlus] = useState(false);
  const [buttonRest, setButtonRest] = useState(false);

  const decrement = () => {
    setButtonPlus(false);
    setButtonRest(false);
    const newNumbers = numbers.map((number) =>
      number === 0 ? null : (number -= 1)
    );

    newNumbers.forEach((element) => {
      if (element === 0) {
        setButtonRest(true);
      }
    });
    setNumbers(newNumbers);
  };

  const increment = () => {
    setButtonRest(false);
    setButtonPlus(false);
    const newNumbers = numbers.map((number) =>
      number === 20 ? null : (number += 1)
    );

    newNumbers.forEach((element) => {
      if (element === 20) {
        setButtonPlus(true);
      }
    });
    setNumbers(newNumbers);
  };

  return (
    <>
      <div>
        <Button text="<<" actionOnClick={decrement} disabled={buttonRest} />
        {numbers.map((number) => (
          <Number valor={number} key={number} />
        ))}
        <Button text=">>" actionOnClick={increment} disabled={buttonPlus} />
      </div>
    </>
  );
}

export default App;
