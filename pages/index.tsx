
import type { InferGetServerSidePropsType } from "next"
import getAllProducts from "framework/shopify/product/get-all-products"
import getConfig from "framework/shopify/api/config"
import { Layout } from "@components/common"
import ProductCard from "@components/product/ProductCard"
import { Grid } from "@components/ui"

export async function getStaticProps() {
  const config =getConfig()

  const products =await getAllProducts(config)

  return{
    props:{
      products
    },
    revalidate: 4*60*60

  }
  
}

export default function Home({
  products
}: InferGetServerSidePropsType<typeof getStaticProps>) {

  
  return (
    <>
      <Grid>
      {products.slice(0,3).map(product =>
        <ProductCard 
        key={product.id}
        product={product} />
        )}
        </Grid>
    </>
  )
}

Home.Layout = Layout
