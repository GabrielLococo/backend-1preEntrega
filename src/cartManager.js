import {promises as fs} from 'fs'
import {v4 as uuidv4} from 'uuidv4'

export class CartManager {
    constructor(){
        this.path = 'cart.json'
        this.carts = []
    }

    getCarts = async () => {
       const response =  await fs.readFile(this.path, 'utf-8')
       const responseJSON = JSON.parse(response)
       return responseJSON
    }

    getCartProducts = async (id) => {
        const carts = await this.getCarts()
        const cart = carts.find(cart => cart.id === id)

        if(cart){
            return cart.products
        }else {
            console.log('carrito no encontrado')
        }
    }

    newCart = async () => {
        const id = uuidv4()

        const newCart = {id,products: []}
        
        this.carts = await this.getCarts()
        this.carts.push(newCart)

        await fs.writeFile(this.path,JSON.stringify(this.carts))
        return newCart
    }

}