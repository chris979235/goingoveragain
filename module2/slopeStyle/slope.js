function collectAnimals(...all) {  
 console.log(all)
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]


function combineFruit(fruit, sweets, vegetables){
  return {...fruit,...sweets,...vegetables}
}

console.log(combineFruit({
  fruit: ["apple", "pear"],
  sweets: ["cake", "pie"],
  vegetables: ["carrit"]
}))
//=> {
  //     fruit: ["apple", "pear"],
  //     sweets: ["cake", "pie"],
  //     vegetables: ["carrit"]
  //  }


  const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
  };
   
   function parseSentence({location, duration}){
     
     return `We're going to have a good time in ${location} for ${duration}`
    }
    console.log(parseSentence(vacation))


    const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

    function returnFavorites(arr){
     const [firstFav,,, secondFav, thirdFav]=arr
      
        return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav;
    }
    
    console.log(returnFavorites(favoriteActivities))


    function combineAnimals() {  
      console.log (realAnimals.concat(magicalAnimals,mysteriousAnimals))
    }
    
    const realAnimals = ["dog", "cat", "mouse"];
    const magicalAnimals = ["jackolope"];
    const mysteriousAnimals = ["platypus"];
    
    combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals); 
    
    // ["dog", "cat", "mouse", "jackolope", "platypus"]
    ///////////////


    
    function populatePeople(names){
      return names.map(named => {
          name = named.split(" ");
          const [firstName,lastName]=name 
          return {
              firstName,
               lastName,
          }
    })
  }
  console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
  
  
  //[
  //  {firstName: "Frank", lastName: "Peterson"},
  //  {firstName: "Suzy", lastName: "Degual"},
  //  {firstName: "Liza", lastName: "Jones"},
  //]
