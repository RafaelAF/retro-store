import Image from "next/image"

import productImage from '../../../../../public/prod-page-01.png' 

export const ProductImageContainer = () => {
    return (
        <div className="flex-1 p-2">
            <Image src={productImage} className="w-full" alt="" />
        </div>
    )
}