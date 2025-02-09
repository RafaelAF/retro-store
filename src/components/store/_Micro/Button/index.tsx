import Link from "next/link"

type Props = {
    href: string,
    text: string
}

export function Button (props: Props){
    return (
        <Link href={props.href}>
            <button className="w-full py-3 px-12 bg-d-green border border-d-black">{props.text}</button>
        </Link>
    )
}