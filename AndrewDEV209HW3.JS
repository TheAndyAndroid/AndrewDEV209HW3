// Movie array that holds the Movie info that the user will input
MOVIEs = [];

let MOVIE = function(pTitle, pRating, pYear){
    this.title = pTitle;
    this.rating = pRating;
    this.year = pYear;
}
// Takes the Movie's info and adds it to the list
document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("buttonAddMovie").addEventListener("click", function () {

        let xTitle = document.getElementById("iTitle").value;
        let xRating = document.getElementById("iRating").value;
        let xYear = document.getElementById("iYear").value;
        // Sends an Alert if any of the inputs are empty
        if (!xTitle || !xRating || !xYear) {
            alert("You need to fill in all fields in order to add a new movie!");
            return;
        }

        let movieTemp =  new MOVIE(xTitle, xRating, xYear)
        MOVIEs.push(movieTemp);
        console.log(MOVIEs);
        // Clears textboxes once the Add Movie button is clicked
        document.getElementById("iTitle").value = "";
        document.getElementById("iRating").value = "";
        document.getElementById("iYear").value = "";
    });
// Displays the list of Movie Info that the User inputed
    document.getElementById("buttonShow").addEventListener("click", showMovies);
});

function showMovies() {
    let theList = document.getElementById("movieList");
    theList.innerHTML = "";

    MOVIEs.forEach(function (element, i) {
        var myLi = document.createElement('li');
        myLi.innerHTML =  " Title: " + element.title + ", " + " Rating: " + element.rating + ", " + " Year: " + element.year;
        theList.appendChild(myLi);
    });
}