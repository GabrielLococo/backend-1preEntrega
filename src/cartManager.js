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


}