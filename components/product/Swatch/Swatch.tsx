
import { FC } from "react"
import s from "./Swatch.module.css"
import { Check } from "@components/icons/icons"
import cn from "classnames"
import { isDark } from "@lib/color"

interface Props {

    color?: string
    size?: "sm" | "md" | "lg"
    label?: string
    active?: boolean
    variant: "size" | "color" | string
    onClick: ()=> void
}

const Swatch:FC<Props> =({color, label,active,size="md", variant, ...rest}) => {

    label = label?.toLowerCase()
    variant = variant?.toLowerCase()

    const rootClassName = cn(
        s.root,
        {
          [s.active]: active,
          [s.color]: color,
          [s.size]: variant === "size",
          [s.dark]: color && isDark(color),
          [s.sm]: size === "sm"
        }
      )

    return (
        <button 
        style={color ? {backgroundColor: color}: {}}
        className={rootClassName}
        {...rest}>
            { variant === "color" && active &&
                <span>
                <Check />
                </span>
            }
            
            {variant==="size" ? label: null }
        </button>
    )
}

export default Swatch