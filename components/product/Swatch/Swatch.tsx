
import { FC } from "react"
import s from "./Swatch.module.css"

interface Props {
    color?: string
    label?: string
}

const Swatch:FC<Props> =({color, label}) => {

    label = label?.toLowerCase()

    return (
        <>
         { color &&  <>Color: {color}</> }
      Label: {label} {`  `}
        </>
    )
}

export default Swatch