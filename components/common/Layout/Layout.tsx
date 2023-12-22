
import { FC } from "react"
import style from "./Layout.module.css"
import Footer from "../Footer"
import Navbar from "../Navbar"
import { Sidebar } from "@components/ui"
import { CartSidebar } from "@components/cart"


const Layout: FC = ({children}: any) => {
    return(
    <div className={style.root}>
        <Navbar/>
        <Sidebar>
        <CartSidebar />
      </Sidebar>
        <main 
        className=".fit">
        {children}
        </main>
        <Footer />
    </div>
    )
}

export default Layout