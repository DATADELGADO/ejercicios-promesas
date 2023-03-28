/*

# Ejercicio de promesas (then / catch)

Para realizar estos ejercicios, usaremos la [API de Star Wars](https://swapi.dev/).

1. Haz una petición a la API y consigue una lista de los personajes de Stars Wars. 
2. Busca cómo conseguir hacer una petición para que te llegue sólo la información de `Darth Vader`, y muéstrala por consola.
3. Muestra por consola la lista de películas en las que aparece el personaje de `Luke Skywalker`.
4. Busca el personaje de `Leia Organa` y consigue que se muestre por consola la información de su planeta natal: `Alderaan`.
5. En este ejercicio, debes conseguir el resultado final encadenando varios métodos `then()`. Obtén la lista de personajes, haz una petición para `C-3PO`, encuentra las películas en las que aparece, y haz una petición por cada película para mostrar por consola su información. Para hacer esto último, deberás usar un `forEach` que itere sobre la lista de urls de películas y que, en cada iteración, haga una petición con dicha url.

Una vez hayas terminado los ejercicios, prueba a repetir el `ejercicio nº 2`, pero esta vez introduce los resultados en el DOM para que podamos ver en el navegador el nombre, la fecha de nacimiento y la altura de `Darth Vader`.

*/


const startWars = fetch("https://swapi.dev/api/people");
console.log(startWars);



//************************#1*********************** */


// startWars
//     .then(response => response.json())
//     .then(data => console.log(data))


//************************#2*********************** */


// startWars
//     .then(response => response.json())
//     // .then(data => console.log(data))
//     .then(data => {
//         data.results.forEach((element) => {
//             if (element.name == "Darth Vader") {
//                 console.log(element);
//             }
//         })
//     })



//************************#3*********************** */
// startWars
//     .then(response => response.json())
//     .then(data => {
//         let linksFilms = [];
//         data.results.forEach((element) => {
//             let { name } = element;
//             if (name == "Luke Skywalker") {
//                 linksFilms = element.films;
//                 linksFilms.forEach((element) => {
//                     film = fetch(element);
//                     film
//                         .then(response => response.json())
//                         .then(data => console.log(data.title))
//                 })
//             }
//         })

//     })


//************************#4*********************** */

// startWars
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         data.results.forEach(element => {
//             if (element.name == "Leia Organa") {
//                 let homeworld = fetch(element.homeworld);
//                 homeworld
//                     .then(response => response.json())
//                     .then(data => {
//                         console.log(data.name);
//                     })
//             }
//         })
//     })



//************************#5*********************** */

// startWars
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         data.results.forEach(element => {
//             if (element.name.toLowerCase() == "c-3po") {
//                 element.films.forEach(link => {
//                     let film = fetch(link);
//                     film
//                         .then(response => response.json())
//                         .then(data => {
//                             console.log(data);
//                         })
//                 })
//             }
//         })
//     })



//************************#6*********************** */


const div = document.querySelector(".datos");

startWars
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.results.forEach(element => {
            if (element.name.toLowerCase() == "darth vader") {
                let name = document.createElement("h2");
                name.innerText = "NAME: " + element.name;
                let heigth = document.createElement("h2");
                heigth.innerText = "HEIGHT: " + element.height;
                let birth_year = document.createElement("h2");
                birth_year.innerText = "BIRTH YEAR: " + element.birth_year;
                div.append(name, heigth, birth_year)
            }
        })
    })