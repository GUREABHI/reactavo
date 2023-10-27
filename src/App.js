//import logo from './logo.svg';
//import './App.css';
import {useState} from 'react';
import Appform from './componentes/Appform';

function App() {
///READ - LECTURA - fnread ///
  const [docBD,setDocBD] = useState([]);
  const fnread = () => {
    
  }

/// DELETE - eliminar - fnDelete ///
  const [idActual,setIdActual] = useState("");
  const fnDelete = (xId) => {

  }

   /// const camposRegistros = {nombre:"", edad:"", genero:""}///
  return (
    <div style={{background:"yellow", width:"350px", padding:"10px"}}>
      <Appform {...{idActual}}/>
      <p>1. Juan Manuel  23 Masculino  ----x - A</p>
      <p>2. Rosa Maria  25 Femenino  ----x - A</p>
      <p>3. Luis Miguel  40 Masculino  ----x - A</p>
    </div>
  );
}

export default App;
