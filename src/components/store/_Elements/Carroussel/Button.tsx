import Link from "next/link"

type Props = {
    url: string,
    text: string,
    alinment: 'CENTER' | 'LEFT' | 'RIGHT'
}

export const ButtonCarroussel = ({ alinment, text, url }: Props) => {

    let align = ''

    if(alinment == 'CENTER'){
        align = 'bottom-10'
    }else if(alinment == 'LEFT'){

    }else{

    }

    return (
        <Link href={url} className={`absolute ${alinment}`}>{text}</Link>
    )
}