import { Product } from "@common/types/products"
import { FC } from "react"
import Link from "next/link"
import Image from "next/legacy/image"
import s from "./ProductCArd.module.css"
import { inherits } from "util"

interface Props {
  product: Product
  varient?: "simple" | "slim"
}
const placeholderImage = "/product-image-placeholder.svg"
const ProductCard: FC<Props> = ({product, varient="simple"}) => {

  return (
    <Link legacyBehavior href={`/products/${product.slug}`}>
      <a className={s.root}>
        {
          varient ==="slim"?
          <>
          <div className="inset-0 flex items-center justify-center absolute z-20">
            <span className="bg-black text-white p-3 font-bold text-xl">
              {product.name}
            </span>
          </div>
          { product.images && (
            <Image
              className={s.productImage}
              alt={product.name ?? "Product image"}
              src={product.images[0].url ?? placeholderImage}
              height={320}
              width={320}
              quality="85"
              layout="fixed"
            />
          )}
        </>  :(
            <>
            <div className={s.productBg}></div>
              <div className={s.productTag}>
                <h3 className={s.productTitle}>
                  <span>{product.name}</span>
                </h3>
                <span className={s.productPrice}>
                  {product.price.value} {product.price.currencyCode}
                </span>
              </div>
              { product.images && (
                <Image
                className={s.productImage}
                  alt={product.name ?? "Product image"}
                  src={product.images[0].url ?? placeholderImage}
                  height={540}
                  width={540}
                  quality="100"
                  layout="responsive"
                />
              )
              }
            </>
          )

        }
        
      </a>
    </Link>
  )
}

export default ProductCard