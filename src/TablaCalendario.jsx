import React from "react";

const TablaCalendario = () => {
  const partidos = [
    { fecha: "16/12/2024", hora: "20:00", rival: "Oriente Petrolero", local: "Local", estadio: "Hernando Siles" },
    { fecha: "18/12/2024", hora: "20:30", rival: "San Antonio Bulo Bulo", local: "Local", estadio: "Hernando Siles" },
    { fecha: "20/12/2024", hora: "19:00", rival: "Blooming", local: "Visitante", estadio: "Ramon Tahuichi Aguilera" },
    // Agrega más partidos aquí
  ];

  return (
    <div className="tabla-calendario">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Rival</th>
            <th>Local/Visitante</th>
            <th>Estadio</th>
          </tr>
        </thead>
        <tbody>
          {partidos.map((partido, index) => (
            <tr key={index}>
              <td>{partido.fecha}</td>
              <td>{partido.hora}</td>
              <td>{partido.rival}</td>
              <td>{partido.local}</td>
              <td>{partido.estadio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaCalendario;
