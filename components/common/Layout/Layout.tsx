
import { FC } from "react"
import style from "./Layout.module.css"
import Footer from "../Footer"



const Layout: FC = ({children}: any) => {
    return(
    <div className={style.root}>
        <main 
        className=".fit">
        {children}
        </main>
        <Footer />
    </div>
    )
}

export default Layout