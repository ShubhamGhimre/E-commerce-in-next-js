import { product } from "@/utils/product";
import ProductDetails from "./ProductDetails";
import Container from "@/components/container";
import ListRating from "./ListRating";


interface IPrams {
    productid?: string;
}

const Product = ({ params }: { params: IPrams }) => {
    console.log("params", params);
    return (
        <div className="p-8">
            <Container>
                <ProductDetails product={product} />
                <div className="flex flex-col mt-20 gap-4">
                    <div>Add rating</div>
                    <ListRating product={product} />
                </div>
            </Container>
        </div>

    );
}

export default Product;