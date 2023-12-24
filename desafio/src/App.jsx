import { useState, useEffect } from 'react';
import Listado from './components/Listado';
import { BaseColaboradores as InitialBaseColaboradores } from './BaseColaboradores';
import Formulario from './components/Formulario';
import Alert from './components/Alert';
import Buscador from './components/Buscador';

function App() {
    const [baseColaboradores, setBaseColaboradores] = useState(InitialBaseColaboradores);
    const [colaboradoresFiltrados, setColaboradoresFiltrados] = useState(baseColaboradores);
    const [contadorId, setContadorId] = useState(InitialBaseColaboradores.length + 1);
    const [errorV, setErrorV] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        setColaboradoresFiltrados(baseColaboradores);
    }, [baseColaboradores]);

    const agregarColaborador = (nuevoColaborador) => {
        nuevoColaborador.id = contadorId.toString();
        setContadorId(contadorId + 1);
        setBaseColaboradores([...baseColaboradores, nuevoColaborador]);
    };

    return (
        <>
            <Buscador 
                colaboradores={baseColaboradores} 
                setColaboradoresFiltrados={setColaboradoresFiltrados}
            />
            <Listado baseColaboradores={colaboradoresFiltrados}/>
            <Formulario 
                agregarColaborador={agregarColaborador}
                setErrorV={setErrorV} 
                setSuccess={setSuccess}
            />
            <Alert
            errorV={errorV}
            success={success}
        />
    </>
    );
}

export default App;