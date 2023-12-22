
import type { InferGetServerSidePropsType } from "next"
import getAllProducts from "framework/shopify/product/get-all-products"
import getConfig from "framework/shopify/api/config"
import { Layout } from "@components/common"
import ProductCard from "@components/product/ProductCard"
import { Grid, Hero, Marquee } from "@components/ui"


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
        <Hero headline="Cookies, ice cream and muffin"
          description="Cake jelly-o danish cookie gummies shortbread jujubes. Jelly-o cake lollipop tootsie roll donut donut apple pie. Powder fruitcake soufflé topping cheesecake pudding liquorice pie danish. Tart chocolate cake gingerbread bear claw candy canes dragée. Jujubes powder pudding sweet muffin marzipan tootsie roll. Macaroon cheesecake marzipan soufflé oat cake icing caramels liquorice. Chupa chups chocolate bar tootsie roll jujubes chupa chups powder."
        />
        <Marquee>
        {products.slice(0,3).map(product =>
        <ProductCard 
        key={product.id}
        varient="slim"
        product={product} />
        )}
        </Marquee>
        <Grid layout="B">
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
