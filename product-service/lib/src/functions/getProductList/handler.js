import { middyfy } from '../../libs/lambda';
import { getProducts } from '../../services/product-service';
const getProductList = async (event) => {
    console.log("Lambda invocation with event: ", JSON.stringify(event));
    try {
        const products = await getProducts();
        if (products && products.length) {
            console.log('success');
        }
        console.log(`Product not found`, products);
    }
    catch (error) {
        console.log(error);
    }
};
export const main = middyfy(getProductList);
//# sourceMappingURL=handler.js.map