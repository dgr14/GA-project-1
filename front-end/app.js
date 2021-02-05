// DOM Element Variables
const container = document.getElementById('container')
const resultsDiv = document.getElementById("result-container")
const searchBtn = document.getElementById('search-button')
// console.log('howdy')

localStorage.setItem('favoriteMovieArr', [])

const consoleValue = value => {
    const searchValue = document.getElementById('search-input').value
    console.log(searchValue)
    fetch(`http://www.omdbapi.com/?apikey=ca9a8849&t=${searchValue}`)
.then((responseData) => {
    console.log(responseData)
    return responseData.json()
})
.then((jsonData) => {
    console.log(jsonData)
        console.log('api search click')
        resultsDiv.innerHTML = `
            <div class='returned-results'>
                <h3 id='result-title' class='result-title'>${jsonData.Title}</h3>
                <img src="${jsonData.Poster}" alt="poster">

                    <p id='rated' class='result'>Rated: ${jsonData.Rated}</p>
                    <p id='plot' class='result'><i>${jsonData.Plot}</i></p>
                    <p id='released' class='result'>Released: ${jsonData.Released}</p>
                    <p id='runtime' class='result'>Runtime: ${jsonData.Runtime}</p>
                
                <div class='info-row'>
                    <p id='genre' class='result'>Genre: ${jsonData.Genre}</p>
                    <p id='director' class='result'>Director: ${jsonData.Director}</p>
                    <p id='actors' class='result'>Actors: ${jsonData.Actors}</p>
                    <p id='awards' class='result'>Awards: ${jsonData.Awards}</p>
                <div class='ratings-container'>
                    <p id='imd' class='result'>${jsonData.Ratings[0].Source}:</p>
                    <p class='result-score'>${jsonData.Ratings[0].Value}</p>
                </div>
                <div class='ratings-container'>
                    <p id='rotten-tomatoes' class='result'>${jsonData.Ratings[1].Source}:</p>
                    <p class='result-score'>${jsonData.Ratings[1].Value}</p>
                </div>
                <div class='ratings-container'>
                    <p id='metacritic' class='result'>${jsonData.Ratings[2].Source}:</p>
                    <p class='result-score'>${jsonData.Ratings[2].Value}</p>
                </div>
                <div class='info-row'>
                    <p id='imdb-rating' class='result'>IMDB Rating: ${jsonData.imdbRating}</p>
                    <p id='box-office' class='result'>Box Office Gross: ${jsonData.BoxOffice}</p>
                    <p id='production' class='result'>Production: ${jsonData.Production}</p>
                    <p id='website' class='result'><a href="${jsonData.Website}" target="_blank" rel="noopener noreferrer">Movie Website</a>
                </div>
            </div>
        `  
    
})
.catch((error) => {
    console.error(`There has been an error: ${error}`)
})
}

searchBtn.addEventListener('click', consoleValue)

// on page load the user should see a list a recently released movies underneath search

// user needs to be able to search for movies

// example of a helper function
// let students = ['bob', 'jill', 'danny']
// function setArrayToLS(arr){
//     let JSONarr = JSON.stringify(arr)
//     localStorage.setItem(`${name}, arr`)
// }

// setArrayToLS(students)
// console.log(searchValue)

// console.log(resultsDiv)
// console.log(container)
// have to create a function that allows for indiana jones to be replaced with the input value the user submits
// Need to get an array of movies 

// I had written an autocomplete function for my searchbar but the API wouldnt allow me to access all the movie titles so I couldn't end up using the autocomplete function

// function autocomplete(inp, arr) {
//     /*the autocomplete function takes two arguments,
//   the text field element and an array of possible autocompleted values:*/
//   let currentFocus;
//   /*execute a function when someone writes in the text field:*/
//   inp.addEventListener("input", function(e) {
//     var a, b, i, val = this.value
//     /*close any already open lists of autocompleted values*/
//     closeAllLists()
//     if (!val) { return false }
//     currentFocus = -1;
//     /*create a DIV element that will contain the items (values):*/
//     a = document.createElement("DIV")
//     a.setAttribute("id", this.id + "autocomplete-list")
//     a.setAttribute("class", "autocomplete-items")
//     /*append the DIV element as a child of the autocomplete container:*/
//     this.parentNode.appendChild(a)
//     /*for each item in the array...*/
//     for (i = 0; i < arr.length; i++){
//     /*check if the item starts with the same letters as the text field value:*/
//         if(arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
//             // Create a div element for each matching element
//             b = document.createElement("DIV")
//             // Make the matching letters bold
//             b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>"
//             b.innerHTML += arr[i].substr(val.length)
//             // insert an input field that will hold the current array item's value
//             b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>"
//             /*execute a function when someone clicks on the item value (DIV element):*/
//             b.addEventListener("click", function(e) {
//                 // insert the value for the autocomplete text field
//                 inp.value = this.getElementsByTagName("input")[0].value
//                 // close the list of autocompleted values, or any other open lists of autocompleted values
//                 closeAllLists()
//             })
//             a.appendChild(b)
//         }
//     }
//   })
// }
// // execute a function presses a key on the keyboard
// inp.addEventListener('keydown', function(e) {
//     var x = document.getElementById(this.id + "autocomplete-list")
//     if (x) x = x.getElementsByTagName("div")
//     if (e.keyCode == 40) {
//         // if the arrow down key is pressed, increase the currentFocus variable
//         currentFocus++
//         // make the current item more visible
//         addActive(x)
//     } else if (e.keyCode == 38) {
//         // if the arrow up key is pressed, decrease the currentFocus variable
//         currentFocus--
//         // make the current item more visible
//         addActive(x)
//     } else if (e.keyCode == 13) {
//         // If the enter key is pressed, prevent the form from being submitted
//         e.preventDefault()
//         if (currentFocus > -1) {
//             // simulate a click on the 'active' item
//             if (x) x[currentFocus].click()
//         }
//     }
// });

// function addActive(x) {
//     // a function to classify an item as 'active'
//     if (!x) return false;
//     // start by removing all the 'active' class on all items
//     removeActive(x);
//     if (currentFocus >= x.length) currentFocus = 0
//     if (currentFocus < 0) currentFocus = (x.length - 1);
//     // Add class 'autocomplete-active'
//     x[currentFocus].classList.add("autocomplete-active")
// }

// function removeActive(x) {
//     // a function to remove the "active" class from all autocomplete items
//     for (var i = 0; i < x.length; i++) {
//         x[i].parentNode.removeChild(x[i])
//     }
// }

// function closeAllLists(elmnt) {
//     // close all autocomplete lists in the document, except the one passed as an argument
//     var x = document.getElementsByClassName("autocomplete-items")
//     for (let i = 0; i < x.length; i++) {
//         if (elmnt != x[i] && elmnt != inp){
//             x[i].parentNode.removeChild(x[i])
//         }
//     }
// }
// // execute a function when someone clicks in the document
// document.addEventListener("click", function(e) {
//     closeAllLists(e.target)
// })