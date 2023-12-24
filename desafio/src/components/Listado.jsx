import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


export default function Listado({ baseColaboradores }) {
    return (
        <>
            <h1>Lista de colaboradores</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
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
}