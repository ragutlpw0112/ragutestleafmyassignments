// Var declaration --> 1995
// Dynamically typed / loosely typed
// string,boolean,number

// 1) DECLARATION & INITIALIZATION
var course = "Playwright"

// 2) RE INITIALIZATION
//course ="cypress"
//course = 8765753
course = true
console.log(typeof course)

// 3) RE DECLARATION
var course=null // global scope
console.log(typeof course)

var country = "Australia"
// 4) SCOPE RESTRICTION  - not block scoped, it is function scope
function getNationality()
{
    // function scope 
       { // block scope
        var country = "India"
    }
    console.log("COUNTRY NAME IS : " + country);
}
getNationality()
console.log("Countries are:  " + country, "AND " + course); //ReferenceError: courtry is not defined

// 5. HOISTING
console.log(courseDuration);
var courseDuration ="2 months or 8 weekends"

