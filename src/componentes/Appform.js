import React, { useState } from 'react'
import {db} from '../firebase/firebase';
import {addDoc, collection} from 'firebase/firestore';

const Appform = () => {
  const camposRegistro = {nombre:"", edad:"", genero:""}
  const [objeto, setObjeto] = useState(camposRegistro)

  const manejarEnvio = (e) => {
    e.preventDefault();
    try {
      if(db){
        addDoc(collection(db, 'persona'), objeto);
        console.log("Guardando en BD");
      }else{
        console.log("Actualizar en BD")
      }
    }catch (error) {
      console.error();
    }

  }

  const manejarCambiosEntrada = (e) => {
    //console.log(e.target.value);
    const {name, value} = e.target;
    console.log(name,value);
  
    setObjeto({...objeto, [name]:value});
    //console.log("nnn");
  }

  return (
    <div style={{background:"orange",padding:"10px", textAlign:"center"}}>
      <h>Appform.js</h><br/>
      <form onSubmit={manejarEnvio}>
      <input onChange={manejarCambiosEntrada} name='nombre' type='text' placeholder='Nombre...' /><br/>
      <input onChange={manejarCambiosEntrada} name='edad' type='number'placeholder='Edad...' /><br/>
      <input onChange={manejarCambiosEntrada} name='genero' type='text'placeholder='Genero...' /><br/>
      <button>Guardar</button>
      </form>
    </div>
  )
}

export default Appform
