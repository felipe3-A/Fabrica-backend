import { Router } from "express";

import { deleteUser, getUser, getUser1, postUser, putUser } from "../controller/userController.js"; 

const router= Router()

router.get('/usuarios',getUser)
router.post('/usuarios',postUser)
router.put('/usuarios',putUser)
router.delete('/usuarios/id',deleteUser)
router.get('/usuarios/:id',getUser1)


export default router