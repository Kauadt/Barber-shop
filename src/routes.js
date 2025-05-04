import { Router } from "express";

const router = Router()

function findProductById(productId) {
    return products.filter(products => products.id == productId)
}

function findProductIndex(id) {
    return products.findIndex(product => product.id === Number(id))
}

const products = [
    { id: 1, name: "Pomada modeladora", price: 20 },
    { id: 2, name: "Gel de cabelo", price: 40 },
    { id: 3, name: "Esponja NuhDread", price: 80 },
]

router.post("/products", (req, res) => {
    products.push(req.body)
    res.status(201).send("Product registered successfully!")
})

router.get("/products", (req, res) => {
    res.status(200).send(products)
})

router.get("/products/:productId", (req, res) => {
    const productId = req.params.productId
    res.json(findProductById(productId))
})

router.delete("/products/:productId", (req, res) => {
    let index = findProductIndex(req.params.productId)

    if(index === -1){
        return res.status(404).send("Product not found.")
    }
    products.splice(index, 1)
    res.send(`Product with ID ${req.params.productId} was deleted successfully!`)
})

export default router