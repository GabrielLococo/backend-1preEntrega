import { Router } from 'express'
import { cartManager } from '../app.js'

const cartsRouter = Router()

//crear nuevo carrito (http://localhost:8080/api/carts/)

cartsRouter.post('/', async(req, res) => {
    try {
        const response = await cartManager.newCart()
        res.json(response)
    } catch (error) {
        res.send('error al crear carrito')
    }
})

cartsRouter.get('/:cid', async (req, res) => {
    const {cid} = req.params
    try {
        const response = await cartManager.getCartProducts(cid)
        res.json(response)
    } catch (error) {
        res.send('error al intentar enviar los productos del carrito')
    }
})