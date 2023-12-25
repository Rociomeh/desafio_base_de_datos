import { useState } from 'react';

export default function Buscador({ colaboradores, setColaboradoresFiltrados }) {
  const [busqueda, setBusqueda] = useState('');

  const handleInputChange = (event) => {
    const valorBusqueda = event.target.value;
    setBusqueda(valorBusqueda);

    if (valorBusqueda === '') {
      setColaboradoresFiltrados(colaboradores);
    } else {
      const terminoDeBusqueda = valorBusqueda.toLowerCase();
      const filtrados = colaboradores.filter((colaborador) =>
        Object.values(colaborador).some(valor =>
          String(valor).toLowerCase().includes(terminoDeBusqueda)
        )
      );
      setColaboradoresFiltrados(filtrados);
    }
  };

  return (
    <div className='buscador'>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="busqueda"
          value={busqueda}
          onChange={handleInputChange}
          placeholder="Busca un colaborador"
        />
      </form>
    </div>
  );
}