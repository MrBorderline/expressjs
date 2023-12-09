async function obtenerDatos() {
  try {
    // Simulación de una operación asíncrona
    const respuesta = await fetch('http://192.168.59.103:31120/todos');
    const datos = await respuesta.json();
    console.log(datos);
    console.log(JSON.stringify(datos));

  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
}

// Llamar a la función asíncrona
obtenerDatos();