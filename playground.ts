import { log } from "console"



interface Person {
    kind : "business" | "academic" | "otherType"
    name:string
    age:number
}

interface BussinessPerson extends Person {
    kind : "business"
    salary: number
}

interface AcademicPerson extends Person {
    kind : "academic"
    publications: string[]
}
interface Person {
    prop1: string
    prop2: number
  }

  type Noop=() =>any
  type Noop2 = () =>void


export default function play(){
    

  function fn1(x:Noop): void{
    
  }

  function fn2(x:Noop2): void{
    
  } 

    
}