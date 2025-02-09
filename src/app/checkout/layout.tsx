
import Footer from "@/components/store/Footer"
import Header from "@/components/store/Header"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export default function RootLayout({ children }: Props){
    return (
        <>
            <Header />
                {children}
            <Footer />
        </>
    )
}