

import { useAddItem } from "@common/cart"
import { MutationHook } from "@common/types/hooks"

export default useAddItem


export const handler: MutationHook = {
  fetcher: ({fetch,input}) => {
    const respone = fetch(input)
    return respone
  },
  useHook: ({fetch}) => {
    return (input: any) => {
      const response = fetch(input)
      return {
        output: response
      }
    }
  }
}