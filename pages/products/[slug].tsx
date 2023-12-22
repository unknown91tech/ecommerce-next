

import { Layout } from "@components/common"
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from "next"
import getConfig from "framework/shopify/api/config"
import getAllProductsPaths from "framework/shopify/product/get-all-products-paths"
import { getProduct } from "framework/shopify/product"

// fetch all of the products slugs
export const getStaticPaths: GetStaticPaths = async () => {
    const config = getConfig()
  const { products } = await getAllProductsPaths(config)
  return {
    paths: products.map(p => ({params: {slug: p.slug}})),
    fallback: false
  }
}

// provide product spefici data to the page
export const getStaticProps = async ({
  params }: GetStaticPropsContext<{slug: string}>
) => {
  const config = getConfig()
  const { product } = await getProduct(config)
  return {
    props: {
      product
    }
  }
}

export default function ProductSlug({
  product }: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <div>
      {product.name}
      {product.slug}
    </div>
  )
}


ProductSlug.Layout = Layout