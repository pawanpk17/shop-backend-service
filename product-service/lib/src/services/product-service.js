import { products } from './products-data.json';
class ProductServices {
    fetchProductById(id) {
        return Promise.resolve(products.find(product => product.id === id));
    }
    getProducts() {
        return Promise.resolve(products);
    }
}
export const { fetchProductById, getProducts } = new ProductServices();
//# sourceMappingURL=product-service.js.map