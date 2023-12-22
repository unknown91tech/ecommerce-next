
import { FC } from "react"
import style from "./Layout.module.css"
import Footer from "../Footer"
import Navbar from "../Navbar"



const Layout: FC = ({children}: any) => {
    return(
    <div className={style.root}>
        <Navbar/>
        <main 
        className=".fit">
        {children}
        </main>
        <Footer />
    </div>
    )
}

export default Layout