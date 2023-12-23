import { ImageEdge ,MoneyV2,ProductOption,ProductVariantConnection,Product as ShopifyProduct} from "../schema";
import { Product } from "@common/types/products";

function normalizeProductImages({edges} : {edges : Array<ImageEdge>}){
   return edges.map(({node: {originalSrc: url, ...rest}})=> {
        return {
            url: `/images/${url}`
        }
    })
}

const normalizeProductPrice = ({currencyCode , amount}:MoneyV2) =>{
    return {
        value: +amount,
        currencyCode
    }
}

const normalizeProductOption = ({
    id,
    values,
    name: displayName
}: ProductOption) =>{  
    
    const normalized = {
        id,
        displayName,
        values: values.map(valu => {
            let output: any = {
                label: values
            }
            if(displayName.match(/colou?r/gi)){
                output ={
                    ...output,
                    hexColor: values
                }
            }
            return output
        })
    }

    return normalized
    
}

const normalizeProductVariants = ({edges}: ProductVariantConnection) => {
    return edges.map(({node}) => {
            const {id,selectedOptions, sku , title, priceV2 , compareAtPriceV2} = node

        return {
            id,
            name: title,
            sku:sku|| id,
            price: +priceV2.amount,
            listPrice: +compareAtPriceV2?.amount,
            requiresShipping: true
        }
    })
}
export function normalizeProduct(productNode: ShopifyProduct): Product{
    const { 
        id,
        title: name, 
        handle,
        vendor,
        description,
        images: imageConnection,
        priceRange,
        options,
        variants,
        ...rest
    } = productNode

        const product = {
            id,
            name,
            vendor,
            description,
            path: `./${handle}`,
            slug: handle.replace(/^\/+|\/+$/g, ""),
            images: normalizeProductImages(imageConnection),
            price: normalizeProductPrice(priceRange.minVariantPrice),
            options: options 
            ? options.filter(o => o.name !== "Title").map(o => normalizeProductOption(o))
            : [],
            variants: variants 
            ? normalizeProductVariants(variants)
            : [],
            ...rest
        }
        return product
}