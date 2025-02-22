export const ProductInfos = () => {
    return (
        <div className="flex flex-col flex-1 border gap-6 border-d-black p-5">
            <div>
                <p>Denim Skirt</p>
            </div>
            <div>
                <p>$139.90</p>
                <p>$70.00</p>
            </div>
            <div>
                <p>Options:</p>
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div>
                <p>Size:</p>
                <div>
                    <span>S</span>
                    <span>M</span>
                    <span>L</span>
                    <span>XL</span>
                </div>
            </div>
            <div>
                <p>Quantity:</p>
                <div>
                    <span>-</span>
                    <span>1</span>
                    <span>+</span>
                </div>
            </div>
            <div>
                <button>Add to cart</button>
                <button>Checkout</button>
            </div>
            <div>descricao</div>
        </div>
    )
}