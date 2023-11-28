

// interface Person {
//     name: string,
//     age: string
// }
class Person {
    name: string
    age: string

    constructor (name: string, age: string){
        this.name= name
        this.age= age
    }
}

interface PersonLoggerFn {
    (name: string , age?: string) : string
}

export default function play(){
    const name = "Jay"
    const age = "20"

    const person: Person = {
        name: "John",
        age:"25"
    }

    
    const logPersonInfo:PersonLoggerFn = (personName: string, personAge: string = "0") =>{
        const info = "Name :" + personName + ", age: " +personAge
        console.log(info)
        return info
    }

    function logPersonInfo2(person : {name: string , age: string}){
        const info = "Name :" + person.name + ", age: " +person.age
        console.log(info)
        return info
    }
    const log =logPersonInfo(name)
    logPersonInfo2(new Person("Ed", "40"))
}