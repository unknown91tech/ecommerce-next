import { Product } from "@common/types/products"
import { FC } from "react"
import Link from "next/link"
import Image from "next/legacy/image"
import s from "./ProductCArd.module.css"
import { inherits } from "util"

interface Props {
  product: Product
}
const placeholderImage = "/product-image-placeholder.svg"
const ProductCard: FC<Props> = ({product}) => {

  return (
    <Link legacyBehavior href={`/products/${product.slug}`}>
      <a className={s.root}>
        <div className={s.productBg}></div>
        <div className={s.productTag}>
          <h3 className={s.productTitle}>
            <span>{product.name}</span>
          </h3>
          <span className={s.productPrice}>14 $</span>
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
      </a>
    </Link>
  )
}

export default ProductCard