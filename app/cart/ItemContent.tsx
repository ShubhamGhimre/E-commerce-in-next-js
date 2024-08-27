"use client"
import { formatPrice } from "@/utils/formatPrice";
import { CartProductType } from "../product/[productid]/ProductDetails";
import Link from "next/link";

import { truncateText } from "@/utils/truncateText";
import Image from "next/image";
import SetQuantity from "@/components/products/SetQuantity";
import { MdDeleteForever } from "react-icons/md";
import { useCart } from "@/hooks/useCart";

interface ItemContentProps {
    item: CartProductType;
}

const ItemContent: React.FC<ItemContentProps> = ({ item }) => {

    const  {handleRemoveProductFromCart, handleCartQuantityIncrease, handleCartQuantityDecrease, handleClearCart} = useCart();

    return (
        <div className="grid grid-cols-5 text-xs md:text-sm gap-4 border-t-[1.5px] border-slate-200 py-4 items-center">
            <div className="col-span-2 justify-self-start flex gap-3 md:gap-2">
                <Link href={`/product/${item.id}`}>
                    <div className="relative w-[70px] aspect-square">
                        <Image src={item.selectedImg.image} alt="product image" fill className="pbject-containt" />
                    </div>
                </Link>
                <div className="flex flex-col justify-between">
                    <Link href={`/product/${item.id}`}>
                        {truncateText(item.name)}
                    </Link>
                    <div>{item.selectedImg.color}</div>
                    <div className="w-[70px]">
                        <button className="text-slate-500 underline" onClick={() => handleRemoveProductFromCart(item)}>
                            Remove
                        </button>
                    </div>
                </div>

            </div>
            <div className="justify-self-center"> {formatPrice(item.price)}</div>
            <div className="justify-self-center">
                <SetQuantity
                    cartCounter={true}
                    cartProduct={item}
                    handleQuantityDecrease={() => {handleCartQuantityDecrease(item)}}
                    handleQuantityIncrease={() => {handleCartQuantityIncrease(item)}}
                />
            </div>
            <div className="justify-self-end font-semibold">
                {formatPrice(item.price * item.quantity)}
            </div>
        </div>
    );
}

export default ItemContent;