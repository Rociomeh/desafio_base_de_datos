import React,{ useState } from 'react';
import Listado from './components/Listado';
import { BaseColaboradores as InitialBaseColaboradores } from './BaseColaboradores';
// import Buscador from './components/Buscador'
// import Alerts from './components/Alerts'
// import  colaboradores from './BaseColaboradores'
import './App.css';
import Formulario from './components/Formulario';
import Alert from './components/Alert';

function App() {

  const [baseColaboradores, setBaseColaboradores] = useState(InitialBaseColaboradores);
  const [contadorId, setContadorId] = useState(InitialBaseColaboradores.length +1);

  const agregarColaborador = (nuevoColaborador) => {
    nuevoColaborador.id = contadorId.toString();

    setContadorId(contadorId + 1);
    
    setBaseColaboradores([...baseColaboradores, nuevoColaborador]);
  };

  return (
    <>
      <Listado baseColaboradores={baseColaboradores}/>
      <Formulario agregarColaborador={agregarColaborador}/>
    </>
  );
}

export default App;
