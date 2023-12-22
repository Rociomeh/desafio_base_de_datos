import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import {BaseColaboradores} from '../BaseColaboradores';


export default function Listado({baseColaboradores}) { //recibe como prop baseColaboradores
  return (
    <>
        <h1>Lista de colaboradores</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Edad</th>
              <th>Cargo</th>
              <th>Teléfono</th>
            </tr>
          </thead>
          <tbody>
            {baseColaboradores.map((colaborador) => (
              <tr key={colaborador.id}>
                <td>{colaborador.id}</td>
                <td>{colaborador.nombre}</td>
                <td>{colaborador.correo}</td>
                <td>{colaborador.edad}</td>
                <td>{colaborador.cargo}</td>
                <td>{colaborador.telefono}</td>
              </tr>
            ))}
          </tbody>
        </Table>
    </>
  );

  //en la linea 20 se llama a baseColaboradores que es el prop pasado y se llama al metodo .map , se define como colaborador al pivote 
  //y este pivote llamado colaborador es el que llamamos en las filas (td) como nombrePivote.propiedad que queremos mostrar
}