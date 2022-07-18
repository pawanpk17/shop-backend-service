import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { middyfy } from '../../libs/lambda';
import schema from './schema';
import { fetchProductById } from '../../services/product-service'
import { errorResponse, successResponse } from "../../utils/apiResponseBuilder";

const getProductById: ValidatedEventAPIGatewayProxyEvent<typeof schema> | any = async (event) => {
  console.log("Lambda invocation with event: ", JSON.stringify(event));
  const { productId } = event.pathParameters;

  try {
    const product = await fetchProductById(productId);
    if(product){
      console.log(`Received product: ${ JSON.stringify( product ) }`);
      return successResponse(product, 200)
    }

    console.log(`Product not found`);
    
    
    }catch (error) {
      console.log(error)
      return errorResponse(error, 500)
    }
};

export const main = middyfy(getProductById);