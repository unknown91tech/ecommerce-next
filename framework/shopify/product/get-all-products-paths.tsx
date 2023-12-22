import ApiConfig from "@common/types/api";
import { Product } from "@common/types/products";

type ReturnType ={
    products: Pick<Product, "slug">[]
}

const getAllProductsPaths= async(config: ApiConfig):Promise<ReturnType>=> {
    return{
        products: [
            { slug: "cool-hat"},
            { slug: "t-shirt"},
            { slug: "lightweight-jacket"}
          ]
    }
}

export default getAllProductsPaths