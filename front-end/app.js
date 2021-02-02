
fetch('')
.then((responseData) => {
    return responseData.json()
})
.then((jsonData) => {
    console.log(jsonData)
})
.catch((error) => {
    console.error(`There has been an error`)
})
// on page load the user should see a list a recently released movies underneath search

// user needs to be able to search for movies




// example of a helper function
// let students = ['bob', 'jill', 'danny']
// function setArrayToLS(arr){
//     let JSONarr = JSON.stringify(arr)
//     localStorage.setItem(`${name}, arr`)
// }

// setArrayToLS(students)