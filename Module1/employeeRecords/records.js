employees=[]

function Employee (name, jobtitle, salary, status='fulltime') {
  // use the "this" keyword to reference each object 
  // that is created from this constructor
  this.name = name;
  this.jobtitle = jobtitle;
  this.salary = salary;
  this.status = status
  this.printEmployeeForm=function(){
    console.log(employees)
  }
}

let person1=new Employee('jhon', 'janitor', 1000, 'parttime')
let person2=new Employee('jim', 'ceo', 100000,)
let person3=new Employee('chris', 'software developer', 100000,)

employees.push(person1,person2,person3)

// console.log(employees)

person1.printEmployeeForm()