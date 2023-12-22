import React, { useState } from 'react';

function Buscador({ colaboradores, setColaboradores }) {
  const [busqueda, setBusqueda] = useState({
    nombre: '',
    correo: '',
    edad: '',
    // Agrega más campos de búsqueda según tus necesidades
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBusqueda({
      ...busqueda,
      [name]: value,
    });
  };

  const buscarColaboradores = () => {
    // Filtrar colaboradores basados en los campos de búsqueda
    const colaboradoresFiltrados = colaboradores.filter((colaborador) => {
      const { nombre, correo, edad } = colaborador;
      const { nombre: busquedaNombre, correo: busquedaCorreo, edad: busquedaEdad } = busqueda;

      // Aplica las condiciones de búsqueda (puedes personalizarlas)
      return (
        nombre.toLowerCase().includes(busquedaNombre.toLowerCase()) &&
        correo.toLowerCase().includes(busquedaCorreo.toLowerCase()) &&
        (busquedaEdad === '' || edad >= parseInt(busquedaEdad, 10))
      );
    });

    // Actualizar el estado de los colaboradores con los resultados de la búsqueda
    setColaboradores(colaboradoresFiltrados);
  };

  return (
    <div>
      <h2>Buscador de Colaboradores</h2>
      <form>
        <div>
          <label>Nombre:</label>
          <input type="text" name="nombre" value={busqueda.nombre} onChange={handleInputChange} />
        </div>
        <div>
          <label>Correo:</label>
          <input type="text" name="correo" value={busqueda.correo} onChange={handleInputChange} />
        </div>
        <div>
          <label>Edad:</label>
          <input type="number" name="edad" value={busqueda.edad} onChange={handleInputChange} />
        </div>
        {/* Agrega más campos de búsqueda aquí */}
        <button type="button" onClick={buscarColaboradores}>
          Buscar
        </button>
      </form>
    </div>
  );
}

export default Buscador;
