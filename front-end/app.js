// DOM Element Variables
const container = document.getElementById('container')
const resultsDiv = document.getElementById("result-container")
const searchBtn = document.getElementById('search-button')
const searchValue = document.getElementById('search-input').value


console.log(searchValue)
// console.log(resultsDiv)
// console.log(container)
// have to create a function that allows for indiana jones to be replaced with the input value the user submits

fetch('http://www.omdbapi.com/?apikey=ca9a8849&t=indiana+jones')
.then((responseData) => {
    return responseData.json()
})
.then((jsonData) => {
    console.log(jsonData)
    searchBtn.addEventListener('click', (e) => {
        e.preventDefault()
        resultsDiv.innerHTML = `
            <div class='returned-results'>
                <h3 id='result-title' class='result-title'>${jsonData.Title}</h3>
                <img src="${jsonData.Poster}" alt="poster">
                <p id='rated' class='result'>Rated: ${jsonData.Rated}</p>
                <p id='plot' class='result plot'>${jsonData.Plot}</p>
                <p id='released' class='result'>Released: ${jsonData.Released}</p>
                <p id='runtime' class='result'>Runtime: ${jsonData.Runtime}</p>
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
                <p id='imdb-rating' class='result'>IMDB Rating: ${jsonData.imdbRating}</p>
                <p id='box-office' class='result'>Box Office Gross: ${jsonData.BoxOffice}</p>
                <p id='website' class='result'><a href="${jsonData.Website}" target="_blank" rel="noopener noreferrer">Movie Website</a>
            </div>
        `  
    })
})
.catch((error) => {
    console.error(`There has been an error: ${error}`)
})
// on page load the user should see a list a recently released movies underneath search

// user needs to be able to search for movies

// What I should include in my movie html object that I will append?
/* 
- title
- year
- rating
- release date
- runtime
- genre
- Director
- actors
- plot
- awards
- poster
- ratings
- boxOffice $
- website

*/



// example of a helper function
// let students = ['bob', 'jill', 'danny']
// function setArrayToLS(arr){
//     let JSONarr = JSON.stringify(arr)
//     localStorage.setItem(`${name}, arr`)
// }

// setArrayToLS(students)