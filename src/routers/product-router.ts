import { signIn, signUp } from '@/controllers/auth-controller'
import { changeActiveStatus, getAllProducts, newProduct } from '@/controllers/product-controller'
import { authenticateToken } from '@/middlewares/authentication-middlerare'
import { Router } from 'express'

const productRouter = Router()

productRouter
    .all("/*", authenticateToken)
    .post("", newProduct)
    .get("/", getAllProducts)
    .put("/", changeActiveStatus)

export { productRouter }