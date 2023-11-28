

export default function play(){
    const name = "Jay"
    const age = "20"

    function logPersonInfo(personName: string, personAge: string){
        const info = "Name :" + personName + ", age: " +personAge
        console.log(info)
        return info
    }
    logPersonInfo(name, age)
}