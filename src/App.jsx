/* eslint no-eval: 0*/
import React, { useState } from "react"
import words from "lodash.words"
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
    const items=words(stack, /[^-^+^*^/]+/g)
    //Lo que la función ejecuta
    const value= items.length > 0? items[items.length-1]:"0"
    return (
        <main className="react-calculator">
            <Result value={value}/>
            <Numbers
                onClickNumber={number =>{
                    //ECMAScript 6, template literals
                    setStack(`${stack}${number}`)
                }}
            />
            <Function
                onContentClear={clear =>
                    setStack("")
                }
                onDelete={deleted =>{
                    if(stack.length>0){
                        const newStack= stack.substring(0,stack.length-1)
                        setStack(newStack)
                    }
                    
                }}
            />
            <MathOperations
                onClickOperation={operation =>(
                    setStack(`${stack}${operation}`)
                )}
                onClickEqual={equal =>(
                    setStack(eval(stack).toString())
                )}
            />
        </main>)
}
//Exportación
export default App