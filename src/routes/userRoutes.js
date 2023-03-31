import { Router } from "express";

import { deleteUser, getUser, getUser1, postUser, putUser } from "../controller/userController.js"; 

const router= Router()

router.get('/usuarios',getUser)
router.post('/usuarios',postUser)
router.put('/usuarios/:id',putUser)
router.delete('/usuarios/:id',deleteUser)
router.get('/usuarios/:id',getUser1)


// Codigo para permitir los Cors desde el backcend
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();});

export default router