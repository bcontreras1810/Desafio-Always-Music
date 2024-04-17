const pool = require("./dbConfig");

// Función para ejecutar una consulta SQL
async function consultaSQL() {
    // Obtenemos una conexión de la pool
    const estudiante = await pool.connect();
    try {
      // Ejecutamos la consulta SQL
      const result = await estudiante.query("SELECT * FROM estudiantes");
      // Mostramos los resultados
      console.log(result.rows);
    } catch (error) {
      console.error("Error al ejecutar la consulta:", error);
    } finally {
      // Liberamos la conexión
      estudiante.release();
    }
  }
  
  // Función para insertar un usuario
  const insertEstudiante = async () => {
    const text = "INSERT INTO estudiantes(nombre, rut, curso, nivel)  VALUES ($1, $2, $3, $4)";
    const values = ["Barbara Contreras", "12345678-9", "bateria", 6];
  
    const response = await pool.query(text, values);
    console.log(response);
  };
  
  // Funcion para consultar estudiante por rut 
  const consultaRut = async (rut) => {
    const text = "SELECT * FROM estudiantes WHERE rut = $1"
    const values =[rut];

    const result = await pool.query(text, values);
    console.log(result.rows);
  }

  // Función para eliminar un usuario
  const deleteEstudiante = async () => {
    const text = "DELETE FROM estudiantes WHERE id = $1";
    const values = [8];
  
    const response = await pool.query(text, values);
    console.log(response);
  };
  
  // Función para actualizar un usuario
  const updateEstudiante = async () => {
    const text = "UPDATE estudiantes SET nivel = $1";
    const values = [8];
  
    const response = await pool.query(text, values);
    console.log(response);
  };
  
  module.exports = { consultaSQL, consultaRut, insertEstudiante, deleteEstudiante, updateEstudiante };
  