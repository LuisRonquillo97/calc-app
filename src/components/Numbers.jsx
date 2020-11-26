import React from "react"
import PropTypes from "prop-types"
import Button from "./Button"

const numbers=[1,2,3,4,5,6,7,8,9,0]

//si sólo es 1 parámetro y no más, puedes evitar los paréntesis al solicitar variables
const RenderButtons = onClickNumber => {
    //<Button text="1" clickHandler={onClickNumber} />
    const renderButton = number =>(
        //El key es requerido en mappings de React.
        //key debe ser único y estable.
        //Es mala práctica utilizar índices o valores al azar para el valor de key.
        <Button 
            key={number} 
            text={number.toString()} 
            clickHandler={onClickNumber}
        />
    )
    return numbers.map(renderButton)
}

const Numbers = ({ onClickNumber }) => (
    <section className="numbers">
        {
            //si solo se abren llaves, se corre código JS
            RenderButtons(onClickNumber)
        }
    </section>
)

Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired
}

export default Numbers