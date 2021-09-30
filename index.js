// findMatching- This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.
function findMatching(drivers,string) {
    let answer = drivers.filter(function (person) {
        return person.toLowerCase() === string.toLowerCase()
    })
    return answer
}

// fuzzyMatch - This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.
function fuzzyMatch(drivers, letters) {
    let almostMatch = drivers.filter(function (person) {
        if (person.startsWith(letters)) {
            return person 
        } 
    })
    return almostMatch
}

// matchName - This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.

// function matchName(obj, string) {
//     let match = obj.filter(function (){
//         if (obj.name === string) {
//             return obj.name + obj.hometown
//         }
//     })
//     return match
// }

function matchName(drivers, name){
    return drivers.filter(function(hometown){
      return hometown.name === name
    })
  }