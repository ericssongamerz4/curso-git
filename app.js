// URL base de la API de Rick y Morty
const baseUrl = "https://rickandmortyapi.com/api/character/";

// Función para obtener el personaje según el ID
async function getCharacterById(id) {
  try {
    const response = await fetch(`${baseUrl}${id}`); // Realiza la solicitud a la API
    if (!response.ok) {
      throw new Error("Personaje no encontrado"); // Manejo de error si el personaje no existe
    }
    const character = await response.json(); // Convierte la respuesta en JSON
    displayCharacter(character); // Llama a la función para mostrar el personaje
  } catch (error) {
    console.error("Error al obtener el personaje:", error); // Manejo de errores
    document.getElementById("character").innerHTML = `<p>${error.message}</p>`;
  }
}

// Función para mostrar el personaje en el DOM
function displayCharacter(character) {
  const characterContainer = document.getElementById("character");
  characterContainer.innerHTML = ""; // Limpia el contenedor antes de agregar el personaje

  // Crea el HTML para mostrar el personaje
  characterContainer.innerHTML = `
  <div class="d-flex justify-content-center pt-4">
      <div class="character card my-auto" style="width: 18rem;">
          <img src="${character.image}" class="card-img-top" alt="${character.name}">
          <div class="card-body">
              <h3 class="card-title">${character.name}</h3>
              <div class="card-text lead">
                  <p>Estado: ${character.status}</p>
                  <p>Especie: ${character.species}</p>
              </div>
          </div>
      </div>
  </div>
`;
}

// Evento para buscar personaje cuando se hace clic en el botón
document.getElementById("searchButton").addEventListener("click", () => {
  const characterId = document.getElementById("characterId").value; // Obtiene el valor del input
  if (characterId) {
    getCharacterById(characterId); // Llama a la función para obtener el personaje
  } else {
    alert("Por favor ingrese un número de personaje");
  }
});
