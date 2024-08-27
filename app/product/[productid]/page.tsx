
import ProductDetails from "./ProductDetails";
import Container from "@/components/container";
import ListRating from "./ListRating";
import { products } from "@/utils/products";




interface IPrams {
    productid?: string;
}

const Product = ({ params }: { params: IPrams }) => {

    console.log("params", params);
    // console.log("productID", params.productId);
  
    // const productId = params?.productId;

    // if (productId) {
    //   console.log("productId", productId); // Logs the extracted productId
    // } else {
    //   console.log("productId is not provided in props");
    // }

    const product = products.find((item) => {
        item.id === params.productid;
        console.log("item", item.id , "params", params);
    });
  



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