import express from 'express'
import { ProductManager } from './productManager.js'
import { productsRouter } from './routes/products.router.js'

const PORT = 8080

const app = express()

export const productManager = new ProductManager

app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use('/api/products', productsRouter)  // http://localhost:PORT/api/products

app.listen(PORT, (req,res) => {
    console.log(`escuchando en el puerto http://localhost/${PORT}`)
})