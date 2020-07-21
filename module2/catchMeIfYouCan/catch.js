try {
    
  function sum(x, y){
     //check data types first and throw error
     return x + y;
   }
   sum(1,2)
   {
      throw new Error("Hey I am an error!")
   }
 }
 catch(err){
   console.log(err)
 }
 finally {
  console.log("I am running no matter what!") 
 }
 

 
 
 