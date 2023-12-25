import { ProductOption, ProductVariant } from "@framework/schema"


interface Discount {
    value: number
  }

  export interface LineItem {
    id: string
    variantId: string
    productId: string
    name: string
    path: string
    quantity: number
    discounts: Discount[]
    options?: ProductOption[] | any
    variant: ProductVariant
  }
  
  export interface Cart {
    id: string
    createdAt: string
    currency: { code: string }
    taxesIncluded: boolean
    // taxes, discounts exluded
    lineItemsSubtotalPrice: number
    // taxes, discounts included
    totalPrice: number
    lineItems: any[]
    discounts: Discount[]
  }