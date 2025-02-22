import { ProductImageContainer } from "../ImageContainer"
import { ProductInfos } from "../ProductInfos"

export const MainSection = () => {
    return (
        <div className="max-w-5xl gap-10 flex w-full py-5 items-center">
            <ProductImageContainer />
            <ProductInfos />
        </div>
    )
}