import React, { useState } from "react"
import Result from "./components/Result"
import Function from "./components/Functions"
import MathOperations from "./components/MathOperations"
import Numbers from "./components/Numbers"

import "./App.css"

//React es basado en componentes, así que no es correcto usar un jsx para hacer múltiples funciones, aunque puede admitirlo.

//Función flecha, es similar a expresión lambda en C#
const App = () => {

    //Array destructuring
    //1ra posición, el valor actual,2da posición, la función para cambiar el valor actual.
    //por convención, el método se debería de llamar set+NombreVariable. En este caso: setStack
    const [stack,setStack] = useState("")
    
    //Lo que la función ejecuta
    console.log("Renderización principal de app")
    return (
        <main className="react-calculator">
            <Result value={stack}/>
            <Numbers
                onClickNumber={number =>{
                    console.log("Number:", number)
                    setStack(stack+number)
                }}
            />
            <Function
                onContentClear={clear =>
                    console.log("content clear")
                }
                onDelete={deleted =>
                    console.log("onDelete")
                }
            />
            <MathOperations
                onClickOperation={operation =>
                    console.log("Operacion:", operation)}
                onClickEqual={equal =>
                    console.log("Igual: ", equal)}
            />
        </main>)
}
//Exportación
export default App