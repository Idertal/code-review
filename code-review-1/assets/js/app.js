const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); // * Se agrego el . para llamar a la clase.
const $b = document.querySelector('.blog'); // *Se quito el # ya que se llama como clase no como id. 
const $l = document.querySelector('.location');

//!await solo puede ser usado dentro de una funcion async*/
async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  //!console.log(data); Aqui veo que se llama data pero no se ha definido.
  const data = await response.json();// * Aquí se define data como el resultado de la petición a la API

  // * Se agrego backticks para corregir la interpolacion. 
 $n.textContent = `${data.name}`;
 $b.textContent = `${data.blog}`;
 $l.textContent = `${data.location}`;

}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}` // Faltaba definr bien el nombre de la variable con "$".
}

displayUser('stolinski').catch(handleError);