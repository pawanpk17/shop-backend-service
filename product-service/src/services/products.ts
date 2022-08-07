export interface ProductInterface {
  id: string,
  title: string,
  description: string,
  price: number,
  category: string,
  image: string,
  rating: Object,
}

export interface ProductServiceInterface {
  getProductById: (id: string) => Promise<ProductInterface>,
  getProducts: () => Promise<ProductInterface[]>
}