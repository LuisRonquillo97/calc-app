import React from "react"
import Result from "./components/Result"
import Button from "./components/Button"

import "./App.css"

//Función flecha, es similar a expresión lambda en C#
const App = () => {
    const clickHandlerFunction=(text)=> {
        console.log("button.clickHandler",text)
    }
    //Lo que la función ejecuta
    console.log("Renderización principal de app")
    return (
    <main className="react-calculator">
        <Result/>
        <div className="numbers">
            <Button text="1" clickHandler={clickHandlerFunction} />
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>0</button>
        </div>
        <div className="functions">
            <button>C</button>
            <button>R</button>
        </div>
        <div className="math-operations">
            <button>+</button>
            <button>-</button>
            <button>*</button>
            <button>/</button>
            <button>=</button>
        </div>
    </main>)
}

//Exportación
export default App