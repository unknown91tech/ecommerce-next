import { Product } from "@common/types/products";

type AvailableChoices = "color" | "size" | string

export type Choices = {
  [P in AvailableChoices]: string 
}

export function getVariant(product: Product , choices: Choices){

    const variant = product.variants.find((variant)=>{
        console.log(variant)
        return true
    })
    return variant
}