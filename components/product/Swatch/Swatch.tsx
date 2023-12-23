
import { FC } from "react"
import s from "./Swatch.module.css"
import { Check } from "@components/icons/icons"

interface Props {
    color?: string
    label?: string
    varient: "size" | "color" | string
}

const Swatch:FC<Props> =({color, label, varient}) => {

    label = label?.toLowerCase()
    varient = varient?.toLowerCase()

    return (
        <button 
        style={color ? {backgroundColor: color}: {}}
        className={s.root}>
            
            {varient==="size" ? label: null }
        </button>
    )
}

export default Swatch