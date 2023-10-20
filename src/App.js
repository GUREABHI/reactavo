import logo from './logo.svg';
import './App.css';
import C01Componente from './componentes/C01componente';
import Appform from './componentes/Appform';

function App() {
  return (
    <div style={{background:"yellow", width:"350px", padding:"10px"}}>
      <Appform/>
      <i class="large material-icons">insert_chart</i>

      <p>1. Juan Manuel  23 Masculino  ----x - A</p>
      <p>2. Rosa Maria  25 Femenino  ----x - A</p>
      <p>3. Luis Miguel  40 Masculino  ----x - A</p>
    </div>
  );
}

export default App;
