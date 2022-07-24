import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { middyfy } from '../../libs/lambda';
import schema from './schema';
import { createProductService } from '../../services/product-service'
import { errorResponse, successResponse } from "../../utils/apiResponseBuilder";

const createProductHandler: ValidatedEventAPIGatewayProxyEvent<typeof schema> | any = async (event) => {
  const request  = event.body;
  const productData = {
    title: request.title,
    description: request.description,
    price: request.price,
  };

  try {
    const product = await createProductService(productData);
    if(product){
      return successResponse(product, 200)
    }

    console.log(`Product not found`);
    return successResponse( { message: "Product not found" }, 404 );
    
    }catch (error) {

	    console.log(error)
      return errorResponse(error, 500)
    }
};

export const main = middyfy(createProductHandler);


//serverless invoke local --function createProductHandler --data '{"body":{"title":"Oneplus Nord","description":"A oneplus mobile which is nothing like apple","price": 99}'