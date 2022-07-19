import { middyfy } from '../../libs/lambda';
import { fetchProductById } from '../../services/product-service';
const getProductById = async (event) => {
    console.log("Lambda invocation with event: ", JSON.stringify(event));
    const { productId } = event.pathParameters;
    try {
        const product = await fetchProductById(productId);
        if (product) {
            console.log(`"Received product: ${JSON.stringify(product)}`);
        }
        console.log(`Product not found`);
    }
    catch (error) {
        console.log(error);
    }
};
export const main = middyfy(getProductById);
//# sourceMappingURL=handler.js.map