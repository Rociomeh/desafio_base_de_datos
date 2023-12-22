import { BaseColaboradores } from "../BaseColaboradores";
import React,{ useState } from 'react';
import Alert from './Alert'


export default function Formulario({agregarColaborador}) {


    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [edad, setEdad] = useState("");
    const [cargo, setCargo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [contadorId, setContadorId] = useState(BaseColaboradores.length +1); //se define contadorId para que aumente en 1 el ultimo id de la tabla


    const handleSubmit = (e) => {
        e.preventDefault();

        //instancia para crear el nuevo colaborador
        const nuevoColaborador = {
            nombre,
            correo,
            edad,
            cargo,
            telefono
        };

        // Agregar el nuevo colaborador a la base de datos

        setContadorId(BaseColaboradores.length+1); 
        agregarColaborador(nuevoColaborador);

        //luego se limpian los campos del formulario
        setNombre("");
        setCorreo("");
        setEdad("");
        setCargo("");
        setTelefono("");
    };

    return(
        <>
        <h2>Agregar colaborador</h2>
        <form className = "formulario" onSubmit={handleSubmit}>
            <div className="form-group">
                    <input className = "form-control" 
                            type="text" 
                            name = "Nombre" 
                            onChange = {(e) => setNombre(e.target.value)} 
                            placeholder = "Ingresar nombre"/>
                    <br></br>
                    <input className = "form-control" 
                            type="text" 
                            name = "Correo" 
                            onChange = {(e) => setCorreo(e.target.value)} 
                            placeholder = "Ingresar correo"/>
                    <br></br>
                    <input className = "form-control" 
                            type="number" 
                            name = "Edad" 
                            onChange = {(e) => setEdad(e.target.value)} 
                            placeholder = "Ingresar edad"/>
                    <br></br>
                    <input className = "form-control" 
                            type="text" 
                            name = "Cargo" 
                            onChange = {(e) => setCargo(e.target.value)} 
                            placeholder = "Ingresar cargo"/>
                    <br></br>
                    <input className = "form-control" 
                            type="text" 
                            name = "Telefono" 
                            onChange = {(e) => setTelefono(e.target.value)} 
                            placeholder = "Ingresar telefono"/>
                    <br></br>
                    <button className = "btn btn-success" type="submit" name = "Boton">Agregar Colaborador</button> 
            </div>
        </form>
        </>
    )
}