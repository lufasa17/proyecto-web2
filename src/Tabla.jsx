import React from 'react';

const TablaPosiciones = ({ datos }) => {
  return (
    <div className="tabla-posiciones">
      <table className="tabla">
        <thead>
          <tr>
            <th>#</th>
            <th>Equipo</th>
            <th>PJ</th>
            <th>GF</th>
            <th>GC</th>
            <th>Puntos</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((equipo) => (
            <tr key={equipo.posicion}>
              <td>{equipo.posicion}</td>
              <td>{equipo.nombre}</td>
              <td>{equipo.partidosJugados}</td>
              <td>{equipo.golesFavor}</td>
              <td>{equipo.golesContra}</td>
              <td>{equipo.puntos}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaPosiciones;
