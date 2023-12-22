
import { FC } from "react"
import style from "./Layout.module.css"
import Footer from "../Footer"
import Navbar from "../Navbar"
import { Sidebar } from "@components/ui"
import { CartSidebar } from "@components/cart"
import { useUI } from "@components/ui/context"


const Layout: FC = ({children}: any) => {
    const ui =useUI()
    
    return(
    <div className={style.root}>
        <Navbar/>
        <Sidebar isOpen={ui.isSidebarOpen}>
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