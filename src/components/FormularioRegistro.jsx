import React, { useState } from "react";

const FormularioRegistro = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [materias, setMateria] = useState([""]);
  const [fechas, setFechas] = useState([""]);
  const [mensaje, setMensaje] = useState("");

  const handleMateriaChange = (index, value) => {
    const nuevasMaterias = [...materias];
    nuevasMaterias[index] = value;
    setMateria(nuevasMaterias);
  };

  const handleFechaChange = (index, value) => {
    const nuevasFechas = [...fechas];
    nuevasFechas[index] = value;
    setFechas(nuevasFechas);
  };

  const agregarMateria = () => {
    setMateria([...materias, ""]);
    setFechas([...fechas, ""]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !nombre ||
      !correo ||
      materias.some((materia) => !materia) ||
      fechas.some((fecha) => !fecha)
    ) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }

    const resumenMaterias = materias
      .map((materias, index) => `${materias} (Fecha: ${fechas[index]})`)
      .join("<br>");
    setMensaje(
      `Gracias, ${nombre}, por regitrarte. Has cursado:<br>  ${resumenMaterias}`
    );
  };

  return (
    <div>
      <h2>Formulario de Registro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre Completo: </label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="correo">Correo Electronico: </label>
          <input
            type="email"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </div>

        <div>
          <h3>Materias Cursadas</h3>
          {materias.map((materia, index) => (
            <div key={index}>
              {/* Campo para el nombre de la materia */}
              <input
                type="text"
                placeholder="Materia"
                value={materia}
                onChange={(e) => handleMateriaChange(index, e.target.value)} // Actualiza el estado de la materia
                required
              />

              {/* Campo para la fecha de cursado */}
              <input
                type="date"
                value={fechas[index]}
                onChange={(e) => handleFechaChange(index, e.target.value)}
                required
              />
            </div>
          ))}

          <button type="button" onClick={agregarMateria}>
            Agregar Materia
          </button>
        </div>

        <button type="submit">Enviar</button>
      </form>
      {mensaje && <div dangerouslySetInnerHTML={{ __html: mensaje }} />}
    </div>
  );
};

export default FormularioRegistro;
