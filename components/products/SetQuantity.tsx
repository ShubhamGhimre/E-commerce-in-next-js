"use client"

import { CartProductType } from "@/app/product/[productid]/ProductDetails";

interface SetQuantityProps {
    cartCounter?: boolean,
    cartProduct: CartProductType,
    handleQuantityIncrease: () => void,
    handleQuantityDecrease: () => void
}

const btnStyle = "border-[1.2px] border-slate-300 cursor-pointer px-2 rounded";

const SetQuantity: React.FC<SetQuantityProps> = ({ cartCounter, cartProduct, handleQuantityIncrease, handleQuantityDecrease }) => {
    return (
        <div className="flex gap-8 items-center">
            <div>
                {cartCounter ? null : <div className="font-semibold">QUANTITY</div>}
            </div>
            <div className="flex gap-4 items-center text-base">
                <button className={btnStyle} onClick={handleQuantityDecrease}>-</button>
                <div>{cartProduct.quantity}</div>
                <button className={btnStyle} onClick={handleQuantityIncrease}>+</button>
            </div>

        </div>
    );
}

export default SetQuantity;