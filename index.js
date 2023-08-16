// How to make a Variable
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
//let variables are block scoped
let count =0

//camel Case testTestTest etc

//get elements from HTML file function

//document means HTML document is a datatype of object
//this grabs the count-el element and stores it in ze variable
let countEL = document.getElementById("count-el")

// initialize count
// listen for clicks
// increment count on clicks
// change count-el in HTML to reflect new count


// how to make a functon in JS
function increment()
{
    count++
    //sets inner text of it to count
    countEL.textContent=count
}

let saveEl=document.getElementById("save-el")
function save()
{
    let cnt = count+" - "
    saveEl.textContent+=cnt
    count =0
    countEL.textContent=count
}

