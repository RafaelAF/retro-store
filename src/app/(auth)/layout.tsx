import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export default function RootLayout({ children }: Props){
    return (
        <>

        <p>HEader de autenticacao</p>
        {children}
        <p>Footer de autenticacao</p>
        </>
    )
}