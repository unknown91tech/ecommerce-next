

import { useAddItem } from "@common/cart"
import { MutationHook } from "@common/types/hooks"
import { getCheckoutId } from "../utils"
import { checkoutLineItemsAddMutation } from "@framework/utils/mutations"

export default useAddItem


export const handler: MutationHook = {
  fetcherOptions: {
    query: checkoutLineItemsAddMutation
  },
  fetcher: ({fetch,options ,input}) => {

    const variables= {
      checkoutId: getCheckoutId,
        lineItems: [
          {
            varientId: input.variantId,
            quantity: 1
          }
        ]
    }

    const respone = fetch({
      
      ...options,
      variables
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