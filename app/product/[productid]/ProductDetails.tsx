"use client";

import Button from "@/components/Button";
import ProductImage from "@/components/products/ProductImage";
import SetQuantity from "@/components/products/SetQuantity";
import SetColor from "@/components/products/color";
import { Rating } from "@mui/material";
import { useCallback, useState } from "react";

interface ProductDetailsProps {
    product: any;
}

export type CartProductType = {
    id: string,
    name: string,
    description: string,
    category: string,
    brand: string,
    selectedImg: SelectedImgType,
    quantity: number,
    price: number,
}

export type SelectedImgType = {
    color: string,
    colorCode: string,
    image: string
}

// Horizontal line component
const Horizontal = () => {
    return (
        <hr className="w-[30%] my-2"></hr>
    )
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {

    const [CartProduct, setCartProduct] = useState<CartProductType>(
        {
            id: product._id,
            name: product.name,
            description: product.description,
            category: product.category,
            brand: product.brand,
            selectedImg: { ...product.images[0] },
            quantity: 1,
            price: product.price,
        }
    )

    console.log(CartProduct);

    const productRatting = product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) / product.reviews.length;

    const handleColorSelect = useCallback((value: SelectedImgType) => {
        setCartProduct((prev) => {
            return {
                ...prev,
                selectedImg: value
            }
        })
    }, [CartProduct.selectedImg]);

    const handleQuantityIncrease = useCallback(() => {
        if (CartProduct.quantity === 99) {
            return
        }
        setCartProduct((prev) => {
            return {
                ...prev,
                quantity: prev.quantity + 1
            }
        })
    }, [CartProduct])

    const handleQuantityDecrease = useCallback(() => {
        if (CartProduct.quantity === 1) {
            return
        }
        setCartProduct((prev) => {
            return {
                ...prev,
                quantity: prev.quantity - 1
            }
        })

    }, [CartProduct])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ProductImage
            cartProduct={CartProduct}
            product={product}
            handleColorSelect={handleColorSelect}
            />
                        <div className="flex flex-col gap-1 text-slate-500 text-sm">
                <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>

                <div className="flex items-center gap-2">
                    <Rating name="read-only" value={productRatting} readOnly />
                    <div>{product.reviews.length} reviews</div>
                </div>
                <Horizontal />
                <div className="text-justify">
                    {product.description}
                </div>
                <Horizontal />
                <div>
                    <span className="font-semibold">CATEGORY</span>
                    {product.category}
                </div>
                <div>
                    <span className="font-semibold">BRAND</span>
                    {product.brand}
                </div>
                <div className={product.inStock ? 'text-teal-400' : 'text-rose-400'}>
                    {product.inStock ? "In Stock" : "Out of Stock"}
                </div>
                <Horizontal />

                <SetColor cartProduct={CartProduct} images={product.images} handleColorSelect={handleColorSelect} />

                <Horizontal />
                <SetQuantity cartProduct={CartProduct} handleQuantityIncrease={handleQuantityIncrease} handleQuantityDecrease={handleQuantityDecrease} />
                <Horizontal />
                <div className="max-w-[300px]">
                    <Button

                        label="ADD TO CART"
                        onClick={() => console.log('Add to cart')} />
                </div>

            </div>
        </div>
    );
}

export default ProductDetails;