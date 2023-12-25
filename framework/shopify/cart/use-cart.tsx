
import useCart from "@common/cart/use-cart"
import { checkoutToCart, createCheckout, getCheckoutQuery} from "@framework/utils"
import { useMemo } from "react"
import { Cart } from "@common/types/cart"
import { SWRHook } from "@common/types/hooks"


export type UseCartHookDescriptor = {
    fetcherInput: {
      checkoutId: string
    }
    fetcherOutput: any
    data: Cart
  }

export default useCart

export const handler: SWRHook<UseCartHookDescriptor> = {
    fetcherOptions: {
        query: getCheckoutQuery
    },
    async fetcher({fetch, options, input: {checkoutId}}) {
        let checkout
        if(checkout){
        const {data} = await fetch({...options, variables:{checkoutId}})
        checkout =data.node
        }
        else{
            checkout = await createCheckout(fetch)
        }

        

        const cart = checkoutToCart(checkout)
    
        return cart
    },
    useHook: ({useData}:any) => {
        const data = useData({
            swrOptions:{
                revalidateOnFocus: false
            }
        })
        return useMemo(() => {
            
            return data
          }, [data])
    }
}