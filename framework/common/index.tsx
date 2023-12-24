import { ReactNode, createContext, useContext } from "react";
import { ApiConfig } from "./types/api";
import { useMemo } from "react";


interface ApiProviderProps{
    children: ReactNode | ReactNode[]
    config: ApiConfig 
}


export const ApiContext = createContext({})

export const ApiProvider= ({children, config}:ApiProviderProps) =>{

    const coreConfig =useMemo(()=>{
        return{
            fetcher: config.fetch
        }
    }, [config.fetch])

    return(
        <ApiContext.Provider value={coreConfig}>
            {children}
        </ApiContext.Provider>
    )
}

export const useApiProvider = () => {
    return useContext(ApiContext)
}