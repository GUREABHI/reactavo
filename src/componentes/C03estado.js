import React, { Fragment, useState } from 'react'

const C03estado = () => {
  const [numero, setNumero] = useState(0);

  const aumentar = () =>{
    console.log("Hacer clic");
    setNumero(numero + 1);
  }
  return (
    <Fragment>
      <h3>Mi primer componente {numero}</h3>
      <button onClick={aumentar}>Aumentar</button>
    </Fragment>
  )
}

export default C03estado

