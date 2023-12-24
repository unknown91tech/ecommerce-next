

import { useAddItem } from "@common/cart"
import { MutationHook } from "@common/types/hooks"

export default useAddItem


export const handler: MutationHook = {
  fetcherOptions: {
    query: `query { hello }`
  },
  fetcher: ({fetch,options}) => {
    const respone = fetch({
      
      ...options
    })
    return respone
  },
  useHook: ({fetch}) => {
    return async (input: any) => {
      const response =await fetch(input)
      return {
        output: response
      }
    }
  }
}