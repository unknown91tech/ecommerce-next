
import { FC } from "react"
import style from "./Layout.module.css"



const Layout: FC = ({children}: any) => {
    return(<>
        <main className={style.root}>
        {children}
        </main>
        </>
    )
}

export default Layout