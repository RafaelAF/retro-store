import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export default function RootLayout({ children }: Props){
    return (
        <>

        <p>HEader de admin</p>
        {children}
        <p>Footer de admin</p>
        </>
    )
}