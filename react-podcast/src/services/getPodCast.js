import { BASE_URL } from "./settings";

export const getPodCasts = async () => {
  try {
    const response = await fetch(BASE_URL);
    const responseJson = await response.json();
        
    // Almacena la lista de películas en el almacenamiento local
    
    const lastFetchDate = new Date(localStorage.getItem("lastFetchDate"));
    const shouldFetch = lastFetchDate === null || (new Date() - lastFetchDate) > 24 * 60 * 60 * 1000;
    if (shouldFetch){
    localStorage.setItem("podcast", JSON.stringify(responseJson.feed.entry));
    localStorage.setItem("lastFetchDate", new Date());}
    return responseJson.feed.entry;
  } catch (error) {
    console.error(error);
  }
};


/*
// Función para obtener películas desde el servicio
function getMoviesFromService() {
  // Aquí deberías hacer una solicitud a tu servicio para obtener los datos de las películas
  // Supongamos que el resultado es una lista de películas en formato JSON:
  const movies = [{...}, {...}, ...];

  // Almacena la fecha actual en el almacenamiento local
  localStorage.setItem("lastFetchDate", new Date());

  // Almacena la lista de películas en el almacenamiento local
  localStorage.setItem("movies", JSON.stringify(movies));

  return movies;
}

// Función para obtener las películas desde el almacenamiento local o desde el servicio si es necesario
function getMovies() {
  // Recupera la fecha de la última vez que se solicitaron las películas
  const lastFetchDate = new Date(localStorage.getItem("lastFetchDate"));

  // Comprueba si ha pasado más de un día desde la última vez que se solicitaron las películas
  const shouldFetch = lastFetchDate === null || (new Date() - lastFetchDate) > 24 * 60 * 60 * 1000;

  // Si es necesario, solicita las películas desde el servicio
  if (shouldFetch) {
    return getMoviesFromService();
  }

  // Si no es necesario, recupera las películas del almacenamiento local
  const movies = JSON.parse(localStorage.getItem("movies"));
  return movies;
}
*/