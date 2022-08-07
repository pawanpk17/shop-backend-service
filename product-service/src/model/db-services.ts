import { DBServicesInterface } from "./db"
import { dbQuery, createDBQuery } from './db-helper'
const { Pool } = require('pg')

const pool = new Pool({
  host: 'cloudx-aws-db.cdduwpppdgo1.us-east-1.rds.amazonaws.com',
  user: 'postgres_admin',
  password: 'rds097428',
  database: 'cloud_x',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

class DBServices implements DBServicesInterface {

    connect() {  

    }
    async fetchProduct(id: string){
        try {
           const result = await dbQuery(`SELECT p.id, p.title, p.description, p.price, s.count FROM products p, stocks s 
           WHERE p.id=s.product_id 
           and p.id = '${id}'`)

           return Promise.resolve(result);
          } catch (err) {
            console.log('Database ' + err)
            return Promise.resolve(err);
          }
      }
      
      async createProduct(productData){
        try {
           const result = await createDBQuery(productData)
           return Promise.resolve(result);
          } catch (err) {
            console.log('Database ' + err)
            return Promise.resolve(err);
          }
      }

      async query(){
        try {
           const result = await dbQuery("select * from products")
           return Promise.resolve(result);
          } catch (err) {
            console.log('Database ' + err)
            return Promise.resolve(err);
          }
      }
}
export const { query, fetchProduct, createProduct } = new DBServices()
export { DBServices };