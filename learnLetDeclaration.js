// LET declaration --> 2015
// Dynamically typed 

// 1) DECLARATION & INITIALIZATION
let course = "Playwright"

// 2) RE INITIALIZATION --> allowed
course ="cypress"
course = 8765753
course = true
console.log(course)
console.log(typeof course)


console.log ("function results \n")

// 3) RE DECLARATION --> not allowed 
//let course = null // global scope

// 4) SCOPE RESTRICTION  - Block scoped
function getNationality()
{// function scope 
   
    { // block scope
        let country = "India"
        console.log("within function | block scoped | country is: "  + country);
    }
    console.log(country);// ReferenceError: courtry is not defined
}
getNationality() 
console.log("Countries are:  " + country, "AND " + course);


// 5. HOISTING - not allowed 
console.log(courseDuration); // ReferenceError: Cannot access 'courseDuration' before initialization
let courseDuration ="2 months or 8 weekends"