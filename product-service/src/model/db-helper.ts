const { Pool } = require('pg')

async function dbQuery(q) {
const pool = new Pool({
  host: 'cloudx-aws-db.cdduwpppdgo1.us-east-1.rds.amazonaws.com',
  user: 'postgres_admin',
  password: 'rds097428',
  database: 'cloud_x',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})
    const client = await pool.connect()
    let res
    try {
      await client.query('BEGIN')
      try {
          res = await client.query(q)
          await client.query('COMMIT')
      } catch (err) {
        await client.query('ROLLBACK')
        throw err
      }
    } finally {
      client.release()
    }
    return res
  }

  async function createDBQuery({title, description, price}) {
const pool = new Pool({
  host: 'cloudx-aws-db.cdduwpppdgo1.us-east-1.rds.amazonaws.com',
  user: 'postgres_admin',
  password: 'rds097428',
  database: 'cloud_x',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})
    const client = await pool.connect()
    let result
    try {
      await client.query('BEGIN')
      try {

        result = await client.query(`INSERT INTO products (title, description, price) VALUES ($1, $2, $3) RETURNING *`, [title, description, price])
        await client.query('COMMIT')
      } catch (err) {
        await client.query('ROLLBACK')
        throw err
      }
    } finally {
      client.release()
    }
    return result
  }

  export { dbQuery, createDBQuery }