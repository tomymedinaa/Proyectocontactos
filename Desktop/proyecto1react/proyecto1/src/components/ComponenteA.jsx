import React from 'react'
import { Contacto } from '../models/contacto.class';
import ComponenteB from './ComponenteB';

const ComponenteA = () => {


  const contacto1 = new Contacto ("Tomas", "Medina", "tomymedina260@gmail.com", true);

  function cambiarEstado(contacto) {

      if (contacto.conectado === true) {
        contacto.conectado = false;
      } else {
        contacto.conectado = true;
      }

  }

  return (
    <>    
    <ComponenteB contacto={contacto1}></ComponenteB>
    <button onClick={()=>cambiarEstado(contacto1)}>Cambiar estado</button>
    
    </>


  )


}




export default ComponenteA