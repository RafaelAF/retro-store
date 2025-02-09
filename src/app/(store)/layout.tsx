import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export default function RootLayout({ children }: Props){
    return (
        <>

        <p>HEader da store</p>
        {children}
        <p>Footer da store</p>
        </>
    )
}