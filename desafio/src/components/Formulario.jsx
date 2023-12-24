import { BaseColaboradores } from "../BaseColaboradores";
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

export default function Formulario({agregarColaborador, setErrorV, setSuccess}) {

    const validName = /^[a-zA-Z]+$/;
    const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
    const validNumber = /^[0-9]+$/;

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [edad, setEdad] = useState("");
    const [cargo, setCargo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [contadorId, setContadorId] = useState(BaseColaboradores.length +1); 



    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (nombre === '' || correo === '' || edad === '' || cargo === '' || telefono === '') {
            setErrorV("Faltan datos en el formulario");
            setSuccess(""); 
            return; 
        }else if(!validName.test(nombre)){
            setErrorV('Nombre Invalido')
            setSuccess('')
            return; 
        }else if(!validEmail.test(correo)){
            setErrorV('Correo Invalido')
            setSuccess('')
            return;
        }else if(!validNumber.test(edad)){
            setErrorV('Edad Invalida')
            setSuccess('')
            return;
        }else if(edad > 100){
            setErrorV('No comple el rango de edad')
            setSuccess('')
            return;
        }else if(!validNumber.test(telefono)){
            setErrorV('Telefono invalido')
            setSuccess('')
            return;
        }else if(telefono.length < "8"){
            setErrorV('Ingresa un numero de telefono valido')
            setSuccess('')
            return;
        }
        setErrorV("");
        setSuccess("Registro exitoso");
    
        const nuevoColaborador = {
            id: contadorId, 
            nombre,
            correo,
            edad,
            cargo,
            telefono
        };
    
        agregarColaborador(nuevoColaborador);
        setContadorId(contadorId + 1); 
        setNombre("");
        setCorreo("");
        setEdad("");
        setCargo("");
        setTelefono("");
    };
    

    return(
        <>
        <h2>Agregar colaborador</h2>
        <form className = "formulario" onSubmit={handleSubmit} key={contadorId}>
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
                            type="text" 
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