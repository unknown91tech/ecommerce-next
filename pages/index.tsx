
import type { InferGetServerSidePropsType } from "next"
import getAllProducts from "framework/shopify/product/get-all-products"
import getConfig from "framework/shopify/api/config"

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
    <div>
      {JSON.stringify(products)}
    </div>
  )
}
