
import { FC,ReactNode } from "react"

const Grid: FC <ReactNode> = ({children}:any) => {
    return(
        <div className="root">
            {children}
        </div>
    )
}

export default Grid