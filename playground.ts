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

type RaceCar = {

    name: string
    maxSpeed: 200
    team:string
}

type CityCar ={
    name: string
    space: string
    maxSpeed : 100
} 
type Car = RaceCar | CityCar
export default function play(){
    
    const car: RaceCar = {
        name: "McL",
        maxSpeed: 200,
        team: "McL"
    }

    function logCarInfo(car: Car){
        console.log(car.name)

         switch(car.maxSpeed) {
      case 200:
        console.log(car.team)
        break;
      case 100:
        console.log(car)
        break;
      default:
        console.log(car)
    }

    }
}