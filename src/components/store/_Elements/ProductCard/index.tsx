import Image, { StaticImageData } from "next/image"
import Link from "next/link"

type Props = {
    urlProduct: string
    image: string | StaticImageData,
    colors?: string[]
    productName: string
    colorSelected?: string,
    rating?: number
    price: number
    priceWithoutDiscount: number
}

export const ProductCard = (props: Props) => {
    const {urlProduct, productName, image, price, priceWithoutDiscount, colorSelected = 'none'} = props
    return (
        <Link href={`${urlProduct}/p`} className="border border-d-black p-4 flex flex-col max-w-[278px] gap-5">
            <Image src={image} alt={productName} width={246} height={324} />
            <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                    <span className={`w-5 h-5 block rounded-full border border-d-black bg-d-black`}></span>
                    <span className={`w-5 h-5 block rounded-full border border-d-black bg-d-orange`}></span>
                    <span className={`w-5 h-5 block rounded-full border border-d-black bg-d-blue`}></span>
                </div>
                <div className="flex flex-col gap-1">
                    <p>{productName}</p>
                    <p>{colorSelected}</p>
                </div>
                <div className="flex gap-2">
                    <p>${price.toFixed(2)}</p>
                    <p>${priceWithoutDiscount.toFixed(2)}</p>
                </div>
            </div>
        </Link>
    )
}