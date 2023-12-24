

import { useAddItem } from "@common/cart"
import { MutationHook } from "@common/types/hooks"

export default useAddItem


export const handler: MutationHook = {
  fetcher: ({fetch,input}) => {
    const respone = fetch({
      
      query: ` query{hello} `
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