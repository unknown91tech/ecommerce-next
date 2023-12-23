
import { FC } from "react"
import s from "./Swatch.module.css"
import { Check } from "@components/icons/icons"

interface Props {
    color?: string
    label?: string
    varient: "size" | "color" | string
    onClick: ()=> void
}

const Swatch:FC<Props> =({color, label, varient, ...rest}) => {

    label = label?.toLowerCase()
    varient = varient?.toLowerCase()

    return (
        <button 
        style={color ? {backgroundColor: color}: {}}
        className={s.root}
        {...rest}>
            
            {varient==="size" ? label: null }
        </button>
    )
}

export default Swatch