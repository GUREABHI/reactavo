import React, { useState, useEffect } from 'react'
import {db} from '../firebase/firebase';
import {addDoc, collection, getDoc, doc, updateDoc} from 'firebase/firestore';

const Appform = (props) => {
  const camposRegistro = {nombre:"", edad:"", genero:""};
  const [objeto, setObjeto] = useState(camposRegistro);

  const handleStatusChange = (e) => {   
  
  }

  const handleSubmit = async (e) => {
    try {
        e.preventDefault();
  
        if(props.idActual==""){ 
            if(validarForm()){
                addDoc(collection(db,'persona'), objeto);
                console.log("Guardar en BD");
      
            }else{
                console.log("No se guardo");
            }
      
        }else{


            await updateDoc(doc(collection(db, "persona"), props.idActual), objeto);
            console.log("Se actualizó...");

            props.setIdActual('');
        }  
        setObjeto(camposRegistro);
    } catch (error) {
        console.log("Error en CREAR o UPDATE", error);
    }
  }

/////////////GUARDAR / ACTUALZIAR /////////
const manejarEnvio = (e) => {
  e.preventDefault();
  try {
    if(props.idActual==""){ ///////GUARDA///////
      if(validarForm()){
        addDoc(collection(db,'persona'), objeto);
        console.log("Guardar en BD");

      }else{
        console.log("No se guardo");
      }
      
    }else{
      console.log("Actulizar en BD");
    }
  } catch (error) {
    console.error();
  }
}

const validarForm = () => {
  if(objeto.nombre==="" || /^\s+$/.test(objeto.nombre)){ ////(\s=no permite espacios en blanco)/////
    alert("Escriba nombres...");
    return false;
  }
  if(objeto.edad==="" || /^\s+$/.test(objeto.edad)){ ////(\s=no permite espacios en blanco)/////
    alert("Escriba la edad...");
    return false;
  }
    if(objeto.genero==="" || /^\s+$/.test(objeto.genero)){ ////(\s=no permite espacios en blanco)/////
      alert("Escriba un genero...");
 
      return false;
  }
  return true;
};
const manejarCambiosEntrada = (e) => {
  console.log(e.target.value);
  const {name, value} = e.target;
  console.log(name,value);
  setObjeto({...objeto,[name]:value});
  //console.log("nnnnn");
}
/// Obtener dato del id
 useEffect(() => {
  if( props.idActual === ""){
      setObjeto({...camposRegistro});
  }else{
      obtenerDatosporId(props.idActual);
  }
 }, [props.idActual]);

 const obtenerDatosporId = async (xId) =>{
  const objPorId = doc(db, "persona", xId);
  const docPorId = await getDoc(objPorId);
  if (docPorId.exists()) {
    setObjeto(docPorId.data());
  }else {
    console.log("No hay doc...");
  }
 }
  return (
    <div style={{background:"orange",padding:"10px", textAlign:"center"}}>
      <h>Appform.js</h>
      <form onSubmit={manejarEnvio}>
      <input onChange={manejarCambiosEntrada} value={objeto.nombre} name='nombre' type='text' placeholder='Nombre...' /><br/>
      <input onChange={manejarCambiosEntrada} value={objeto.edad} name='edad' type='text'placeholder='Edad...' /><br/>
      <input onChange={manejarCambiosEntrada} value={objeto.genero} name='genero' type='text'placeholder='Genero...' /><br/>
      <button>
        {props.idActual===""? "Guardar" : "Actualizar"}
      </button>
      </form>
    </div>
  )
}

export default Appform
