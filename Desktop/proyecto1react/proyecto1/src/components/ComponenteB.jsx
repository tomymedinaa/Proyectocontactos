import React from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../models/contacto.class'

const ComponenteB = ({contacto}) => {
  return (
    <div>

    <h2>
      Nombre: {contacto.nombre}
    </h2>
    <h3>
      apellido: {contacto.apellido}
    </h3>
    <h4>
      email: {contacto.email}
    </h4>
    <h5>
      conectado {contacto.conectado ? 'EN LINEA' : 'NO EN LINEA'}
    </h5>

  </div>
  )
}

ComponenteB.propTypes = {

    contacto: PropTypes.instanceOf(Contacto)

}

export default ComponenteB