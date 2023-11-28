import { log } from "console"



interface Person {
    name:string
    age:number
}

interface BussinessPerson extends Person {
    salary: number
}

interface AcademicPerson extends Person {
    publications: string[]
}


export default function play(){
   
   const person: AcademicPerson ={
    name: "jay",
    age: 20,
    publications : ["1", "2"]
   }

   const person2: BussinessPerson ={
    name: "jay",
    age: 20,
    salary:10000
   }
    function logPerson(person: Person) {}

    logPerson(person)
}