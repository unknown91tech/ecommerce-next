
import { FC,ReactNode } from "react"
import s from "./Grid.module.css"
import cn from "classnames"
import { Layout } from "@components/common"


interface Props {
    children: ReactNode[]
    layout? : "A" | "B"
}

const Grid: FC <ReactNode> = ({children, layout="A"}:any) => {

    const rootClassName = cn(
        s.root,{
            [s.layoutA]: layout==="A",
            [s.layoutB]: layout==="B",
            
        }
    )
    return(
        <div className={rootClassName}>
            {children}
        </div>
    )
}

export default Grid