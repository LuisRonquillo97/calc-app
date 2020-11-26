import React from "react"
import PropTypes from "prop-types"

//utilizamos destructuring para obtener los datos directamente del objeto
//en vez de obtener el objeto en sí
const Result = ({ value }) => (
    <div className="result">
        <span>{value}</span>
    </div>
)
//PropTypes es para validar que las variables esperadas
//sean del tipo necesario, y las requeridas.
//es parecido al EntityConfiguration del EF en C#, pero en métodos.
Result.propTypes = {
    value: PropTypes.string.isRequired
}
//Requisitos por defecto, para las variables que definas, del método requerido.
Result.defaultProps = {
    value: "0"
}
export default Result