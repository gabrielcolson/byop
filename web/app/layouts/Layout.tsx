import { ReactNode } from "react"
import { Head } from "blitz"
import { Box } from "@chakra-ui/core"

type LayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || "web"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box minH="100vh">
        {children}
      </Box>
    </>
  )
}

export default Layout
