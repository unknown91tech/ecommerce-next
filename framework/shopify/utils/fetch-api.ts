import { ApiFetcherOptions , ApiFetcherResults } from "@common/types/api"
import exp from "constants"



const fetchApi = async <T>({url,query}: ApiFetcherOptions) : Promise<ApiFetcherResults<T>> => {
   

    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query
        })
    })

    const {data ,errors} = await res.json()
    if(errors){
        throw new Error(errors[0].message ?? errors.message )
    }
    return {data}
} 

export default fetchApi