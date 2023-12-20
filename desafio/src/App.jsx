import { useState } from 'react'
import Listado from './components/Listado'
import Formulario from './components/Formulario'
import Buscador from './components/Buscador'
import Alerts from './components/Alerts'
import  colaboradores from './BaseColaboradores'
import './App.css'

function App() {
  /*useEffect(() => {
    // Puedes utilizar BaseColaboradores aquí o realizar cualquier lógica necesaria
    console.log('Base de Colaboradores:', colaboradores);
  }, []);*/
  return (
    <>
    <Listado />
    {/* Otros componentes y contenido de la aplicación */}
    </>
  );
}

export default App;
