import { ProductServiceInterface } from './products';
import { query, fetchProduct, createProduct } from '../model/db-services'

class ProductServices implements ProductServiceInterface {
    async getProductById(id: string) {
        const { rows } = await fetchProduct(id);
        return Promise.resolve(rows);
    }

    async createProductService(productData) {
        const { rows } = await createProduct(productData);
        return Promise.resolve(rows);
    }
    
    async getProducts() {
        const { rows } = await query();
        return Promise.resolve(rows);
    }
}
export const { getProductById, createProductService, getProducts } = new ProductServices()
export { ProductServices }