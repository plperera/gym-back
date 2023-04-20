import { signIn, signUp } from '@/controllers/auth-controller'
import { changeActiveStatus, getAllProducts, newProduct, getProductById } from '@/controllers/product-controller'
import { authenticateToken } from '@/middlewares/authentication-middlerare'
import { Router } from 'express'

const productRouter = Router()

productRouter
    .get("/", getAllProducts)
    .get("/:productId", getProductById)

    .all("/*", authenticateToken)
    .post("", newProduct)
    .put("/", changeActiveStatus)

export { productRouter }