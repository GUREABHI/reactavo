//import logo from './logo.svg';
//import './App.css';
import {useEffect,useState} from 'react';
import Appform from './componentes/Appform';
import {db} from './firebase/firebase';
import { query,collection, getDocs, doc ,onSnapshot,deleteDoc,where } from 'firebase/firestore';

function App() {
///READ - LECTURA - fnread ///
  const [docsBD,setDocsBD] = useState([]);

  const fnRead = () => {
    try{
      const xColeccionConQuery =  query(collection(db, "persona"));
      const unsubscribe = onSnapshot(xColeccionConQuery, (xDatosBD) => {
        const xDoc = [];
        xDatosBD.forEach((doc) => {
          
          xDoc.push({id: doc.id, ...doc.data()});
        });
        setDocsBD(xDoc);
      });  
    } catch (error) {
      console.error(error);
    }
    
  }
//fnRead();
//  console.log(docsBD);


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
