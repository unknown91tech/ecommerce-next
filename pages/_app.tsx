
import "@assets/main.css"
import { UIProvider, useUI } from "@components/ui/context"
import { AppProps } from "next/app"
import { FC } from "react"


const Noop: FC = ({children}:any) => <>{children}</>

function MyApp({Component, pageProps}: AppProps & {Component: {Layout: FC}}) {
  const Layout = Component.Layout ?? Noop
  return (
      <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </UIProvider>
    
  )
}

export default MyApp